(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30274,e=>{"use strict";let a=(0,e.i(56420).default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);e.s(["Send",0,a],30274)},26045,e=>{"use strict";var a=e.i(43476),t=e.i(51326),s=e.i(46932);e.s(["default",0,function(){return(0,a.jsxs)("section",{className:"relative h-[250px] overflow-hidden bg-cover bg-center flex items-center justify-center",style:{backgroundImage:`url(${(0,t.getAssetPath)("/images/dfs_networking_hall.jpg")})`},children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-slate-950/45 z-0"}),(0,a.jsxs)("div",{className:"absolute inset-0 z-0 select-none pointer-events-none",children:[(0,a.jsx)("div",{className:"absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#12e8e8]/5 rounded-full blur-[120px]"}),(0,a.jsx)("div",{className:"absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a880]/5 rounded-full blur-[120px]"})]}),(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .enquiry-hero-title {
          color: #ffffff !important;
        }
      `}}),(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center justify-center pt-16",children:(0,a.jsx)(s.motion.h1,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-4xl md:text-5xl font-black tracking-tight leading-tight enquiry-hero-title",children:"General Enquiry"})})]})}])},52948,e=>{"use strict";var a=e.i(43476),t=e.i(71645),s=e.i(46932),i=e.i(88653),l=e.i(30274),n=e.i(84026);e.s(["default",0,function(){let[e,r]=(0,t.useState)({enquiryType:"sponsorship",firstName:"",lastName:"",email:"",mobile:"",jobTitle:"",company:"",message:""}),[o,c]=(0,t.useState)(!1);return(0,a.jsxs)("section",{className:"relative pb-28 bg-[#02090f]",children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .enq-label {
          color: #c5a880 !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
        }
        .enq-input {
          color: #ffffff !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          background: transparent !important;
          border: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          font-size: 14px !important;
          padding-bottom: 8px !important;
          width: 100% !important;
        }
        .enq-input:focus {
          outline: none !important;
          border-bottom: 1px solid #12e8e8 !important;
        }
        .enq-input::placeholder {
          color: rgba(255, 255, 255, 0.25) !important;
        }
        .enq-radio-btn {
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(255, 255, 255, 0.02) !important;
          color: rgba(255, 255, 255, 0.7) !important;
          font-family: system-ui, -apple-system, sans-serif !important;
          font-size: 12px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        .enq-radio-btn.active {
          border-color: #12e8e8 !important;
          background: rgba(18, 232, 232, 0.05) !important;
          color: #ffffff !important;
        }
      `}}),(0,a.jsx)("div",{className:"max-w-3xl mx-auto px-6 relative z-10 w-full",children:(0,a.jsx)(i.AnimatePresence,{mode:"wait",children:o?(0,a.jsxs)(s.motion.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:"p-10 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 shadow-2xl relative overflow-hidden text-center flex flex-col items-center space-y-6",children:[(0,a.jsx)("div",{className:"p-4 rounded-full bg-[#12e8e8]/5 border border-[#12e8e8]/20 text-[#12e8e8] mb-2 animate-pulse",children:(0,a.jsx)(n.ShieldCheck,{className:"w-12 h-12"})}),(0,a.jsx)("h3",{className:"text-2xl font-bold text-white tracking-tight",children:"Enquiry Received"}),(0,a.jsxs)("p",{className:"text-white/60 leading-relaxed max-w-md text-sm font-semibold",children:["Thank you, **",e.firstName,"**. Your enquiry details have been transmitted to the host committee. An advisory delegate will contact you shortly at **",e.email,"**."]}),(0,a.jsx)("div",{className:"pt-4",children:(0,a.jsx)("button",{onClick:()=>c(!1),className:"btn-unified-outline",children:"Submit Another Form"})})]}):(0,a.jsxs)(s.motion.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},exit:{opacity:0,y:-15},className:"p-8 md:p-10 rounded-3xl backdrop-blur-xl bg-[#081824]/40 border border-white/5 shadow-2xl relative overflow-hidden text-left",children:[(0,a.jsx)("div",{className:"absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-[#12e8e8]/5 rounded-3xl pointer-events-none"}),(0,a.jsxs)("form",{onSubmit:a=>{(a.preventDefault(),e.firstName&&e.email)?c(!0):alert("Please complete the required fields.")},className:"space-y-8 relative z-10",children:[(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("span",{className:"enq-label block",children:"I am interested in"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2.5 pt-1",children:[{id:"sponsorship",label:"Sponsorship"},{id:"exhibiting",label:"Exhibiting"},{id:"speaking",label:"Speaking"},{id:"delegate",label:"Delegate Pass"},{id:"general",label:"General Enquiry"}].map(t=>(0,a.jsx)("button",{type:"button",onClick:()=>r({...e,enquiryType:t.id}),className:`enq-radio-btn px-4 py-2 rounded-xl ${e.enquiryType===t.id?"active":""}`,children:t.label},t.id))})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"First Name *"}),(0,a.jsx)("input",{type:"text",required:!0,placeholder:"Jane",value:e.firstName,onChange:a=>r({...e,firstName:a.target.value}),className:"enq-input"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"Last Name"}),(0,a.jsx)("input",{type:"text",placeholder:"Doe",value:e.lastName,onChange:a=>r({...e,lastName:a.target.value}),className:"enq-input"})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"Business Email *"}),(0,a.jsx)("input",{type:"email",required:!0,placeholder:"jane.doe@company.com",value:e.email,onChange:a=>r({...e,email:a.target.value}),className:"enq-input"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"Mobile Number"}),(0,a.jsx)("input",{type:"tel",placeholder:"+971 50 123 4567",value:e.mobile,onChange:a=>r({...e,mobile:a.target.value}),className:"enq-input"})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"Job Title"}),(0,a.jsx)("input",{type:"text",placeholder:"Chief Technology Officer",value:e.jobTitle,onChange:a=>r({...e,jobTitle:a.target.value}),className:"enq-input"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"Company Name"}),(0,a.jsx)("input",{type:"text",placeholder:"FinTech Innovations Ltd",value:e.company,onChange:a=>r({...e,company:a.target.value}),className:"enq-input"})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("span",{className:"enq-label block",children:"Message / Inquiry Details"}),(0,a.jsx)("textarea",{rows:4,placeholder:"Provide details about your query or partnership objectives...",value:e.message,onChange:a=>r({...e,message:a.target.value}),className:"enq-input resize-none"})]}),(0,a.jsx)("div",{className:"pt-4 text-center",children:(0,a.jsxs)("button",{type:"submit",className:"btn-unified inline-flex items-center space-x-2.5",children:[(0,a.jsx)("span",{children:"Send Enquiry"}),(0,a.jsx)(l.Send,{className:"w-4 h-4"})]})})]})]})})})]})}])}]);