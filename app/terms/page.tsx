import FAQ, { FAQItem } from '@/components/faqDrwopDown/FaqDrwopDown'
import HeroCategories from '@/components/heroCategories/HeroCategories'
import React from 'react'

export default function page() {
    const faqData: FAQItem[] = [
          {
            question: "Billing and Payments",
            sigleAnswer: "You shall pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. Sensitive and private data exchange happens over a SSL secured communication channel and is encrypted and protected with digital signatures, and the Website and Services are also in compliance with PCI vulnerability standards in order to create as secure of an environment as possible for Users. Scans for malware are performed on a regular basis for additional security and protection. If, in our judgment, your purchase constitutes a high-risk transaction, we will require you to provide us with a copy of your valid government-issued photo identification, and possibly a copy of a recent bank statement for the credit or debit card used for the purchase. We reserve the right to change products and product pricing at any time."
          },
          {
            question: "Links to Other Resources",
            sigleAnswer: "Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website. Your linking to any other off-site resources is at your own risk"
          },
          {
            question: "Links to Other Resources",
            sigleAnswer: "Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website. Your linking to any other off-site resources is at your own risk"
          },
          {
            question: "Links to Other Resources",
            sigleAnswer: "Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein. We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties. You should carefully review the legal statements and other conditions of use of any resource which you access through a link on the Website. Your linking to any other off-site resources is at your own risk"
          },
        ]
  return (
    <div className='w-full' >
         <HeroCategories background='bg-hero-terms-bg' />
        <div className='px-16 py-8 w-full '>
            <h1 className='text-secondary text-2xl font-semibold uppercase'>
            General Terms & Conditions
            </h1>
            <p className='w-full md:w-3/4 lg:w-3/4 text-secondary text-sm font-normal leading-7 pt-4' >These terms and conditions (“Agreement”) set forth the general terms and conditions of your use of the sorbonneacademy website (“Website” or “Service”) and any of its related products and services (collectively, “Services”). This Agreement is legally binding between you (“User”, “you” or “your”) and SORBONNE ACADEMY s.r.o. (“SORBONNE ACADEMY s.r.o.”, “we”, “us” or “our”). If you are entering into this agreement on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this agreement, in which case the terms “User”, “you” or “your” shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this agreement, you must not accept this agreement and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement. You acknowledge that this Agreement is a contract between you and SORBONNE ACADEMY s.r.o., even though it is electronic and is not physically signed by you, and it governs your use of the Website and Services.</p>
            <FAQ fag={faqData} />
        </div>
    </div>
  )
}
