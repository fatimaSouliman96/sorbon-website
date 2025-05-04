import ShowResults from "@/components/showResults/ShowResults";
import { Suspense } from "react";


export default function page() {
  

  return (
    <Suspense fallback={<div>Loading search results...</div>}>
       <ShowResults />
  </Suspense>

  );
}


