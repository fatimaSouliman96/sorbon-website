import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = (): void => {
  const element: HTMLElement | null = document.getElementById("pdf-content");

  if (!element) {
    console.error("Element not found: #pdf-content");
    return;
  }

  html2canvas(element, { scale: 2 }).then((canvas: HTMLCanvasElement) => {
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210 mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297 mm

    // الصورة بالأبعاد الحقيقية بالـ px
    const imgProps = pdf.getImageProperties(imgData);
    const pxFullWidth = canvas.width;
    const pxFullHeight = canvas.height;

    // احسب كم mm يعادل 1 px
    const pxToMm = pdfWidth / pxFullWidth;

    // احسب الارتفاع الكامل للصورة بالنسبة للـ PDF
    const imgHeightMm = pxFullHeight * pxToMm;

    let remainingHeightMm = imgHeightMm;
    let pageOffsetPx = 0;

    while (remainingHeightMm > 0) {
      const pageCanvas = document.createElement("canvas");
      const pageHeightPx = (pdfHeight / pxToMm); // كم px يعادل ارتفاع A4 mm

      pageCanvas.width = pxFullWidth;
      pageCanvas.height = Math.min(pageHeightPx, pxFullHeight - pageOffsetPx);

      const ctx = pageCanvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(
          canvas,
          0,
          pageOffsetPx,
          pxFullWidth,
          pageCanvas.height,
          0,
          0,
          pxFullWidth,
          pageCanvas.height
        );
        const pageData = pageCanvas.toDataURL("image/png");

        if (pageOffsetPx > 0) {
          pdf.addPage();
        }

        const pageHeightMm = pageCanvas.height * pxToMm;
        pdf.addImage(pageData, "PNG", 0, 0, pdfWidth, pageHeightMm);
      }

      pageOffsetPx += pageCanvas.height;
      remainingHeightMm -= pdfHeight;
    }

    pdf.save("download.pdf");
  });
};


