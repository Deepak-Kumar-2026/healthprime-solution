// assets/dummyStyles.js
// export const doctorDetailStyles = {
//   // Layout styles
//   pageContainer: "min-h- font-serif bg-linear-to-br from-emerald-50 via-white to-green-50 p-4 sm:p-6",
//   maxWidthContainer: "max-w-4xl mx-auto",
//   maxWidthContainerLg: "max-w-6xl mx-auto",
//   maxWidthContainerXL: "max-w-9xl",
  
//   // Header styles
//   headerContainer: "text-center mb-12",
//   headerFlexContainer: "flex flex-col sm:flex-row justify-center items-center gap-3 mb-4",
//   headerIconContainer: "p-3 bg-emerald-500 rounded-full shadow-lg",
//   headerTitle: "text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mt-2 sm:mt-0",
  
//   // Form styles
//   formContainer: "bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-2xl p-6 sm:p-8 rounded-3xl mb-16",
//   formGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  
//   // Input styles
//   inputBase: "p-3 rounded-full border-2 border-emerald-100 bg-white placeholder:text-gray-400 shadow-sm w-full focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all",
//   textareaBase: "p-3 rounded-xl border-2 border-emerald-100 bg-white placeholder:text-gray-400 shadow-sm w-full focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all",
//   inputWithIcon: "pr-12",
  
//   // File upload styles
//   fileInput: "w-40 md:w-[180px] border-2 border-emerald-100 rounded-full p-2 text-sm bg-white focus:border-emerald-400 transition",
//   imagePreview: "h-12 w-12 md:h-16 md:w-16 rounded-full shadow-md border-2 border-emerald-200 object-cover",
//   removeImageButton: "absolute -top-2 -right-1.5 bg-rose-500 text-white rounded-full p-1 transition",
  
//   // Password field styles
//   passwordToggleButton: "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full",
  
//   // Schedule section styles
//   scheduleContainer: "p-6 bg-emerald-50 rounded-2xl border border-emerald-100",
//   scheduleHeader: "flex items-center gap-3 mb-4",
//   scheduleTitle: "text-lg font-semibold text-emerald-800",
//   scheduleInputsContainer: "flex flex-wrap items-center gap-3",
//   scheduleDateInput: "p-3 rounded-full border-2 border-emerald-100 w-full sm:w-auto",
//   scheduleTimeSelect: "p-3 rounded-full border-2 border-emerald-100 w-full sm:w-auto",
//   addSlotButton: "px-5 py-3 bg-emerald-500 text-white rounded-full flex items-center gap-2 w-full sm:w-auto justify-center",
//   slotsGrid: "mt-4 space-y-2 max-w-9xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4",
//   slotItem: "flex justify-between items-center bg-emerald-50 p-3 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md text-emerald-800",
  
//   // Submit button styles
//   submitButtonContainer: "md:col-span-2 flex justify-center mt-6",
//   submitButton: "px-8 py-4 rounded-full font-semibold shadow-xl w-full md:w-auto",
//   submitButtonEnabled: "bg-linear-to-r from-emerald-500 to-cyan-500 text-white",
//   submitButtonDisabled: "opacity-60 cursor-not-allowed",
  
//   // Toast styles
//   toastContainer: "fixed top-6 right-3 left-3 sm:right-6 sm:left-auto p-4 rounded-xl shadow-xl flex items-center gap-3",
//   toastSuccess: "bg-emerald-50 border border-emerald-200 text-emerald-700",
//   toastError: "bg-rose-50 border border-rose-200 text-rose-700",
  
//   // Doctor list styles
//   doctorListContainer: "max-w-4xl mx-auto mt-8",
//   doctorListGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
//   doctorCard: "p-4 rounded-xl border bg-white/80 shadow",
//   doctorCardContent: "flex items-center gap-3",
//   doctorImage: "h-12 w-12 rounded-full object-cover",
//   doctorName: "font-semibold",
//   doctorSpecialization: "text-sm text-gray-500",
  
//   // Labels and text
//   label: "block text-sm font-medium text-gray-700 mb-2",
//   emptyState: "text-center text-gray-500",
  
//   // Cursor utilities
//   cursorPointer: "cursor-pointer",
//   cursorNotAllowed: "cursor-not-allowed",
// };

export const doctorDetailStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen font-serif bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-4 sm:px-6 py-10 overflow-hidden",

  maxWidthContainer:
    "relative z-10 max-w-5xl mx-auto",

  maxWidthContainerLg:
    "relative z-10 max-w-7xl mx-auto",

  maxWidthContainerXL:
    "relative z-10 max-w-[1600px] mx-auto",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  headerContainer:
    "text-center mb-14",

  headerFlexContainer:
    "flex flex-col sm:flex-row justify-center items-center gap-4 mb-5",

  headerIconContainer:
    "p-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl",

  headerTitle:
    "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  // ================= FORM CONTAINER =================
  formContainer:
    "bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[40px] p-6 sm:p-10 mb-16",

  formGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-7",

  // ================= INPUTS =================
  inputBase:
    "w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  textareaBase:
    "w-full px-5 py-4 rounded-[28px] border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  inputWithIcon:
    "pr-12",

  // ================= FILE UPLOAD =================
  fileInput:
    "w-full sm:w-[220px] px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  imagePreview:
    "h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-4 border-white shadow-xl",

  removeImageButton:
    "absolute -top-2 -right-2 p-1.5 rounded-full bg-red-500 text-white shadow-md hover:scale-110 transition-all duration-300",

  // ================= PASSWORD =================
  passwordToggleButton:
    "absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-slate-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300",

  // ================= SCHEDULE SECTION =================
  scheduleContainer:
    "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-[32px] p-6 shadow-inner",

  scheduleHeader:
    "flex items-center gap-3 mb-6",

  scheduleTitle:
    "text-xl font-bold text-slate-800",

  scheduleInputsContainer:
    "flex flex-wrap items-center gap-4",

  scheduleDateInput:
    "px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  scheduleTimeSelect:
    "px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  addSlotButton:
    "px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2",

  slotsGrid:
    "mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5",

  slotItem:
    "flex items-center justify-between gap-3 px-5 py-4 rounded-[24px] bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 text-slate-700",

  // ================= SUBMIT BUTTON =================
  submitButtonContainer:
    "md:col-span-2 flex justify-center mt-8",

  submitButton:
    "w-full md:w-auto px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl transition-all duration-300",

  submitButtonEnabled:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-cyan-200 hover:-translate-y-1",

  submitButtonDisabled:
    "bg-slate-200 text-slate-500 cursor-not-allowed",

  // ================= TOAST =================
  toastContainer:
    "fixed top-5 right-4 left-4 sm:left-auto z-50 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-xl border animate-slideIn",

  toastSuccess:
    "bg-white/90 border-emerald-200 text-emerald-700",

  toastError:
    "bg-white/90 border-red-200 text-red-600",

  // ================= DOCTOR LIST =================
  doctorListContainer:
    "max-w-6xl mx-auto mt-12",

  doctorListGrid:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",

  doctorCard:
    "group relative bg-white/80 backdrop-blur-2xl border border-white rounded-[30px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden p-5",

  doctorCardContent:
    "flex items-center gap-4",

  doctorImage:
    "h-16 w-16 rounded-full object-cover border-4 border-white shadow-lg",

  doctorName:
    "text-lg font-bold text-slate-800",

  doctorSpecialization:
    "text-sm text-cyan-600 font-medium mt-1",

  // ================= LABELS =================
  label:
    "block text-sm font-semibold text-slate-700 mb-2",

  emptyState:
    "text-center text-slate-500 py-10",

  // ================= CURSORS =================
  cursorPointer:
    "cursor-pointer",

  cursorNotAllowed:
    "cursor-not-allowed",

  // ================= CUSTOM CSS =================
  customCSS: `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }

      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .animate-slideIn {
      animation: slideIn 0.35s ease-out forwards;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};

// assets/dummyStyles.js

// export const pageStyles = {
//   container: "min-h-screen font-serif bg-emerald-50 p-3 sm:p-4 md:p-6 lg:p-8",
//   maxWidthContainer: "max-w-[1400px] mx-auto",
  
//   headerContainer: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6",
//   headerTitleSection: "w-full sm:w-auto",
//   headerTitle: "text-xl sm:text-2xl font-semibold text-emerald-800",
//   headerSubtitle: "text-xs sm:text-sm text-emerald-600",
//   headerControlsSection: "w-full sm:w-auto",
  
//   searchContainer: "flex items-center bg-white rounded-full px-3 py-2 shadow-sm w-full sm:w-72",
//   searchIcon: "text-emerald-400",
//   searchInput: "ml-3 w-full outline-none text-emerald-700 placeholder-emerald-400 bg-transparent text-sm",
  
//   filterContainer: "flex items-center flex-col md:flex-row lg:flex-row gap-2 w-full sm:w-auto",
//   dateFilter: "bg-white rounded-full px-3 py-2 shadow-sm flex items-center gap-2 w-full sm:w-auto",
//   dateFilterIcon: "text-emerald-400",
//   dateInput: "text-sm outline-none text-emerald-700 bg-transparent w-full",
  
//   selectFilter: "text-sm px-3 py-2 cursor-pointer rounded-full bg-emerald-100 shadow-sm outline-emerald-300 w-full sm:w-auto",
//   clearButton: "ml-0 sm:ml-2 px-3 cursor-pointer py-2 rounded-full bg-emerald-600 text-white text-sm shadow-sm hover:opacity-95 transition w-full sm:w-auto",
  
//   loadingErrorContainer: "col-span-full text-center text-emerald-600 py-12 rounded-lg bg-white/60 border border-emerald-100",
//   errorContainer: "col-span-full text-center text-rose-600 py-6 rounded-lg bg-white/60 border border-rose-100",
//   noResultsContainer: "col-span-full text-center text-emerald-600 py-12 rounded-lg bg-white/60 border border-emerald-100",
  
//   gridContainer: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
  
//   card: "bg-white rounded-2xl p-3 sm:p-4 md:p-5 shadow-sm border border-emerald-100 flex flex-col gap-3 hover:shadow-md transform hover:-translate-y-1 transition",
//   cardHeader: "flex items-start lg:line-clamp-2 justify-between gap-3",
//   cardTitle: "text-base sm:text-lg font-medium text-emerald-800 truncate",
//   patientInfo: "text-xs sm:text-sm text-emerald-500 flex items-center gap-2",
//   doctorInfo: "mt-1 text-xs sm:text-sm text-emerald-600 truncate",
//   doctorSpeciality: "font-medium text-emerald-700",
  
//   feeLabel: "text-nd lg:pt-3 lg:justify-start flex items-center font-bold text-emerald-700 text-xs sm:text-sm",
//   feeAmount: "text-lg sm:text-xl font-semibold lg:justify-start text-emerald-800 flex items-center justify-end gap-1",
  
//   slotContainer: "inline-flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full",
//   slotIcon: "text-emerald-400",
  
//   statusBadge: "text-xs px-3 py-1 rounded-full",
  
//   cancelButton: (isDisabled, isCompleted) => 
//     `px-3 py-2 cursor-pointer rounded-full text-sm flex items-center gap-2 transition ${
//       isDisabled
//         ? "bg-rose-50 text-rose-400 opacity-60 cursor-not-allowed"
//         : "bg-rose-50 text-rose-700 hover:scale-105"
//     }`,
  
//   showMoreButton: "px-4 py-2 cursor-pointer rounded-full bg-white border border-emerald-200 shadow-sm hover:shadow-md transition",
// };


export const pageStyles = {
  // ================= PAGE CONTAINER =================
  container:
    "relative min-h-screen font-serif bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-4 sm:px-6 py-8 overflow-hidden",

  maxWidthContainer:
    "relative z-10 max-w-[1500px] mx-auto",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10",

  headerTitleSection:
    "space-y-2",

  headerTitle:
    "text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerSubtitle:
    "text-sm md:text-base text-slate-500",

  headerControlsSection:
    "flex flex-col lg:flex-row gap-4 w-full lg:w-auto",

  // ================= SEARCH =================
  searchContainer:
    "flex items-center bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl px-4 py-3 shadow-sm w-full sm:w-80 transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-400",

  searchIcon:
    "text-slate-400 w-5 h-5",

  searchInput:
    "ml-3 w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-sm",

  // ================= FILTERS =================
  filterContainer:
    "flex flex-col sm:flex-row gap-3 w-full lg:w-auto",

  dateFilter:
    "flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl px-4 py-3 shadow-sm transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-400",

  dateFilterIcon:
    "text-slate-400 w-5 h-5",

  dateInput:
    "bg-transparent outline-none text-slate-700 text-sm w-full",

  selectFilter:
    "px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-700 text-sm shadow-sm outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 cursor-pointer",

  clearButton:
    "px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= STATES =================
  loadingErrorContainer:
    "col-span-full text-center py-14 rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-xl text-cyan-600 font-semibold",

  errorContainer:
    "col-span-full text-center py-10 rounded-[32px] bg-white/80 backdrop-blur-xl border border-red-100 shadow-xl text-red-500 font-semibold",

  noResultsContainer:
    "col-span-full text-center py-14 rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-xl text-slate-500 font-medium",

  // ================= GRID =================
  gridContainer:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7",

  // ================= CARD =================
  card:
    "group relative bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col gap-5",

  cardTopLine:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= CARD HEADER =================
  cardHeader:
    "flex items-start justify-between gap-4",

  cardTitle:
    "text-lg md:text-xl font-bold text-slate-800 line-clamp-1",

  patientInfo:
    "flex items-center gap-2 text-sm text-slate-500 mt-2",

  doctorInfo:
    "mt-3 text-sm text-slate-600",

  doctorSpeciality:
    "font-semibold text-cyan-600",

  // ================= FEE =================
  feeLabel:
    "text-sm font-semibold text-slate-500 flex items-center gap-2",

  feeAmount:
    "text-2xl font-extrabold text-violet-600 flex items-center gap-1",

  // ================= SLOT =================
  slotContainer:
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium",

  slotIcon:
    "text-cyan-500 w-4 h-4",

  // ================= STATUS =================
  statusBadge:
    "inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold border shadow-sm",

  statusConfirmed:
    "bg-cyan-50 text-cyan-700 border-cyan-200",

  statusCompleted:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  statusCancelled:
    "bg-red-50 text-red-600 border-red-200",

  statusPending:
    "bg-amber-50 text-amber-700 border-amber-200 animate-pulse",

  // ================= BUTTONS =================
  cancelButton: (isDisabled, isCompleted) =>
    `px-4 py-2.5 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
      isDisabled
        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
        : isCompleted
        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
        : "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:-translate-y-1"
    }`,

  showMoreButton:
    "px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-lg {
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
    }

    .shadow-2xl {
      box-shadow: 0 30px 70px rgba(15, 23, 42, 0.16);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};


// export const statusClasses = (status) => {
//   const s = (status || "").toLowerCase();
//   if (s === "confirmed")
//     return "bg-cyan-50 text-cyan-700 border border-cyan-100";
//   if (s === "completed")
//     return "bg-emerald-50 text-emerald-700 border border-emerald-100";
//   if (s === "rescheduled")
//     return "bg-yellow-50 text-yellow-700 border border-yellow-100";
//   if (s === "canceled" || s === "cancelled")
//     return "bg-rose-50 text-rose-700 border border-rose-100";
//   // default: pending
//   return "bg-emerald-50 text-emerald-700 border border-emerald-100";
// };
export const statusClasses = (status) => {
  const s = (status || "").toLowerCase();

  // shared base
  const base =
    "px-4 py-1.5 rounded-full text-xs font-semibold border shadow-sm transition-all duration-300";

  // confirmed
  if (s === "confirmed") {
    return `${base} bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border-cyan-200 hover:shadow-cyan-100`;
  }

  // completed
  if (s === "completed") {
    return `${base} bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border-emerald-200 hover:shadow-emerald-100`;
  }

  // rescheduled
  if (s === "rescheduled") {
    return `${base} bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 border-violet-200 hover:shadow-violet-100`;
  }

  // canceled
  if (s === "canceled" || s === "cancelled") {
    return `${base} bg-gradient-to-r from-rose-50 to-red-50 text-rose-700 border-rose-200 hover:shadow-rose-100`;
  }

  // pending (default)
  return `${base} bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border-amber-200 animate-pulse`;
};

// export const keyframesStyles = `
//   @keyframes fadeUp {
//     from { opacity: 0; transform: translateY(8px) scale(.995); }
//     to   { opacity: 1; transform: translateY(0) scale(1); }
//   }
// `;

// Add to the existing dummyStyles.js file

export const keyframesStyles = `
  /* ================= FADE UP ================= */
  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(20px) scale(0.96);
      filter: blur(8px);
    }

    60% {
      opacity: 0.8;
      transform: translateY(-4px) scale(1.01);
      filter: blur(0px);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0px);
    }
  }

  .animate-fadeUp {
    animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  /* ================= FLOAT ================= */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  /* ================= GLOW ================= */
  @keyframes glow {
    0%, 100% {
      box-shadow:
        0 0 20px rgba(59, 130, 246, 0.12),
        0 10px 30px rgba(59, 130, 246, 0.08);
    }

    50% {
      box-shadow:
        0 0 35px rgba(59, 130, 246, 0.22),
        0 16px 45px rgba(59, 130, 246, 0.14);
    }
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }

  /* ================= SHIMMER ================= */
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }

    100% {
      background-position: 200% 0;
    }
  }

  .animate-shimmer {
    background-size: 200% 100%;
    animation: shimmer 2.5s linear infinite;
  }

  /* ================= REDUCED MOTION ================= */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`;

// export const dashboardStyles = {
//   // Layout styles
//   pageContainer: "min-h-screen font-serif p-4 sm:p-6 bg-linear-to-br from-green-50 via-green-100 to-white",
//   maxWidthContainer: "max-w-7xl mx-auto",
  
//   // Header styles
//   headerContainer: "flex items-center justify-between mb-6",
//   headerTitle: "text-2xl md:text-3xl font-bold text-gray-800",
//   headerSubtitle: "text-sm text-slate-600 mt-1",
  
//   // Stats section styles
//   statsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6",
//   statCard: "p-4 rounded-full bg-linear-to-br from-emerald-100 to-emerald-50 shadow-sm border border-green-100",
//   statCardContent: "flex items-center gap-3",
//   statIconContainer: "p-2 bg-white/80 rounded-full shadow-inner",
//   statLabel: "text-sm text-slate-600",
//   statValue: "text-xl font-semibold text-slate-800",
  
//   // Search section styles
//   searchLabel: "block text-lg text-slate-600 mb-2",
//   searchContainer: "flex items-center gap-3 max-w-md",
//   searchInputContainer: "relative flex-1",
//   searchInput: "pl-10 pr-4 py-2 rounded-full shadow-sm border border-green-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-200 w-full",
//   searchIcon: "absolute left-3 top-2.5 w-5 h-5 text-green-500",
//   clearButton: "px-3 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600",
  
//   // Doctors table styles
//   tableContainer: "bg-white rounded-2xl shadow overflow-hidden",
//   tableHeader: "px-6 py-4 border-b border-green-50 flex items-center justify-between",
//   tableTitle: "text-lg font-semibold text-slate-800",
//   tableCount: "text-sm text-slate-500",
//   errorContainer: "px-6 py-4 border-b border-green-50 text-sm text-rose-600",
//   tableWrapper: "hidden md:block overflow-x-auto",
//   table: "min-w-full divide-y divide-green-50",
//   tableHead: "bg-green-50",
//   tableHeaderCell: "px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider",
//   tableBody: "bg-white divide-y divide-green-50",
//   tableRow: "group transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1",
//   tableRowEven: "bg-white",
//   tableRowOdd: "bg-green-50/40",
//   tableCell: "px-6 py-4 whitespace-nowrap",
//   tableCellFlex: "flex items-center gap-4",
//   verticalLine: "w-1 h-12 rounded-md mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-b from-emerald-400 to-green-200",
//   doctorImage: "w-12 h-12 rounded-full object-cover border-2 border-green-100",
//   doctorName: "text-sm font-medium text-slate-800",
//   doctorId: "text-xs text-slate-500 mt-0.5",
//   doctorSpecialization: "text-sm text-slate-600",
//   feeText: "text-sm text-right text-slate-700",
//   appointmentsText: "text-sm text-center text-slate-700",
//   completedText: "text-sm text-center text-emerald-600",
//   canceledText: "text-sm text-center text-rose-500",
//   earningsText: "text-sm text-right font-semibold text-slate-800",
  
//   // Mobile view styles
//   mobileDoctorContainer: "md:hidden px-4 py-4",
//   mobileDoctorGrid: "space-y-3",
//   mobileDoctorCard: "bg-white rounded-xl shadow p-3 border border-green-50",
//   mobileDoctorHeader: "flex items-center justify-between",
//   mobileDoctorImage: "w-12 h-12 rounded-full object-cover",
//   mobileDoctorName: "text-sm font-medium text-slate-800",
//   mobileDoctorSpecialization: "text-xs text-slate-500",
//   mobileDoctorFee: "text-sm text-slate-700 font-semibold",
//   mobileStatsGrid: "mt-3 grid grid-cols-3 gap-3 text-center",
//   mobileStatLabel: "text-xs text-slate-500",
//   mobileStatValue: "text-sm font-semibold text-slate-800",
//   mobileEarningsContainer: "mt-3 flex items-center justify-between text-sm text-slate-700",
  
//   // Show more button styles
//   showMoreContainer: "px-6 py-4 border-t border-green-50 flex justify-center",
//   showMoreButton: "px-4 py-2 rounded-full bg-white border border-green-200 shadow-sm hover:bg-green-50 transition",
  
//   // Cursor utilities
//   cursorPointer: "cursor-pointer",
//   cursorNotAllowed: "cursor-not-allowed",
  
//   // Text colors (for reuse)
//   textSlate600: "text-slate-600",
//   textSlate700: "text-slate-700",
//   textSlate800: "text-slate-800",
//   textEmerald600: "text-emerald-600",
//   textRose500: "text-rose-500",
//   textRose600: "text-rose-600",
// };

// assets/dummyStyles.js
export const dashboardStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen font-serif px-4 sm:px-6 py-8 bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  maxWidthContainer:
    "relative z-10 max-w-7xl mx-auto",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10",

  headerTitle:
    "text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerSubtitle:
    "mt-2 text-sm md:text-base text-slate-500",

  // ================= STATS GRID =================
  statsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10",

  // ================= STAT CARD =================
  statCard:
    "group relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",

  statCardTopLine:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  statCardContent:
    "flex items-center gap-4",

  statIconContainer:
    "w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg",

  statLabel:
    "text-sm font-medium text-slate-500 uppercase tracking-wide",

  statValue:
    "text-3xl font-extrabold text-slate-800 mt-2 tracking-tight",

  // ================= SEARCH =================
  searchLabel:
    "block text-lg font-semibold text-slate-700 mb-3",

  searchContainer:
    "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-2xl mb-8",

  searchInputContainer:
    "relative flex-1",

  searchInput:
    "w-full pl-12 pr-4 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  searchIcon:
    "absolute left-4 top-3.5 w-5 h-5 text-slate-400",

  clearButton:
    "px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= TABLE CONTAINER =================
  tableContainer:
    "bg-white/80 backdrop-blur-2xl border border-white rounded-[36px] shadow-2xl overflow-hidden",

  tableHeader:
    "px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3",

  tableTitle:
    "text-2xl font-bold text-slate-800",

  tableCount:
    "text-sm text-slate-500",

  errorContainer:
    "px-6 py-5 text-sm text-red-500 bg-red-50 border-b border-red-100",

  // ================= TABLE =================
  tableWrapper:
    "hidden md:block overflow-x-auto",

  table:
    "min-w-full",

  tableHead:
    "bg-slate-50/80",

  tableHeaderCell:
    "px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500",

  tableBody:
    "divide-y divide-slate-100",

  tableRow:
    "group transition-all duration-300 hover:bg-cyan-50/40",

  tableRowEven:
    "bg-white",

  tableRowOdd:
    "bg-slate-50/40",

  tableCell:
    "px-6 py-5 whitespace-nowrap",

  tableCellFlex:
    "flex items-center gap-4",

  verticalLine:
    "w-1.5 h-14 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-b from-cyan-400 to-blue-500",

  doctorImage:
    "w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg",

  doctorName:
    "text-sm font-bold text-slate-800",

  doctorId:
    "text-xs text-slate-500 mt-1",

  doctorSpecialization:
    "text-sm text-cyan-600 font-medium",

  feeText:
    "text-sm font-semibold text-violet-600",

  appointmentsText:
    "text-sm font-medium text-slate-700",

  completedText:
    "text-sm font-semibold text-emerald-600",

  canceledText:
    "text-sm font-semibold text-red-500",

  earningsText:
    "text-base font-bold text-slate-800",

  // ================= MOBILE VIEW =================
  mobileDoctorContainer:
    "md:hidden p-4",

  mobileDoctorGrid:
    "space-y-5",

  mobileDoctorCard:
    "group relative bg-white/80 backdrop-blur-2xl border border-white rounded-[28px] shadow-lg hover:shadow-2xl transition-all duration-500 p-5 overflow-hidden",

  mobileDoctorCardTop:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  mobileDoctorHeader:
    "flex items-center justify-between gap-4",

  mobileDoctorImage:
    "w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg",

  mobileDoctorName:
    "text-base font-bold text-slate-800",

  mobileDoctorSpecialization:
    "text-sm text-cyan-600 font-medium mt-1",

  mobileDoctorFee:
    "text-lg font-bold text-violet-600",

  mobileStatsGrid:
    "mt-5 grid grid-cols-3 gap-4 text-center",

  mobileStatLabel:
    "text-xs text-slate-500",

  mobileStatValue:
    "text-base font-bold text-slate-800 mt-1",

  mobileEarningsContainer:
    "mt-5 flex items-center justify-between px-4 py-3 rounded-2xl bg-cyan-50 border border-cyan-100",

  // ================= SHOW MORE =================
  showMoreContainer:
    "px-6 py-5 border-t border-slate-100 flex justify-center",

  showMoreButton:
    "px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  // ================= CURSOR =================
  cursorPointer:
    "cursor-pointer",

  cursorNotAllowed:
    "cursor-not-allowed",

  // ================= TEXT COLORS =================
  textSlate600:
    "text-slate-600",

  textSlate700:
    "text-slate-700",

  textSlate800:
    "text-slate-800",

  textEmerald600:
    "text-emerald-600",

  textRose500:
    "text-red-500",

  textRose600:
    "text-red-600",

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-lg {
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
    }

    .shadow-2xl {
      box-shadow: 0 30px 70px rgba(15, 23, 42, 0.16);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};

// export const addServiceStyles = {
//   // Container styles
//   container: {
//     main: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-emerald-100 to-teal-50 relative flex items-center justify-center p-4 sm:p-6 overflow-x-hidden",
//     form: "w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-100/50 box-border"
//   },

//   // Header styles
//   header: {
//     title: "text-2xl sm:text-3xl font-extrabold text-transparent bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text",
//     subtitle: "text-sm text-gray-500 mt-1"
//   },

//   // Button styles
//   buttons: {
//     reset: "w-full sm:w-auto px-4 py-2 cursor-pointer rounded-full bg-white border border-emerald-100 hover:shadow transition-shadow duration-200",
//     submit: "inline-flex justify-center items-center gap-2 w-full sm:w-auto px-5 py-2 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-60",
//     addInstruction: "inline-flex cursor-pointer items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors",
//     uploadImage: "flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-emerald-200 hover:shadow transition-shadow",
//     removeImage: "px-3 py-2 rounded-full bg-white border border-red-100 hover:shadow transition-shadow",
//     addSlot: "w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-medium hover:shadow-lg transition-all duration-200",
//     slotRemove: "p-1 rounded-full xl:-mr-1 hover:bg-white transition-colors",
//     toastClose: "p-1 rounded-full hover:bg-white/50 transition-colors"
//   },

//   // Image upload styles
//   imageUpload: {
//     container: (hasError) => 
//       `w-full rounded-2xl p-4 ${
//         hasError 
//           ? "border-2 border-red-200 bg-linear-to-b from-red-50 to-orange-50" 
//           : "bg-linear-to-b from-emerald-50 to-teal-50 border border-emerald-100"
//       } shadow-inner flex flex-col items-center gap-4`,
//     preview: "w-full h-56 rounded-xl overflow-hidden bg-white flex items-center justify-center border border-emerald-100",
//     placeholder: "flex flex-col items-center text-emerald-400"
//   },

//   // Input/Form field styles
//   formFields: {
//     input: (hasError) => 
//       `mt-2 w-full px-4 py-3 rounded-full focus:outline-none focus:ring-2 shadow-md transition-all ${
//         hasError 
//           ? "border-2 border-red-200" 
//           : "border border-emerald-100 focus:ring-emerald-200"
//       }`,
//     textarea: (hasError) => 
//       `mt-2 w-full px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 shadow-md resize-none transition-all ${
//         hasError 
//           ? "border-2 border-red-200" 
//           : "border border-emerald-100 focus:ring-emerald-200"
//       }`,
//     select: "mt-2 w-full px-4 py-3 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none",
//     smallSelect: "mt-1 w-full px-3 py-2 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none",
//     timeSelect: "mt-1 w-full px-2 py-2 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none",
//     ampmSelect: "mt-1 w-full px-1 py-2 rounded-full border border-emerald-100 text-gray-700 bg-white appearance-none focus:ring-2 focus:ring-emerald-200 focus:outline-none"
//   },

//   // Instruction styles
//   instructions: {
//     container: (hasError) => 
//       `mt-3 space-y-2 ${
//         hasError 
//           ? "ring-2 ring-red-100 rounded-xl p-2" 
//           : ""
//       } max-h-44 overflow-auto pr-2`,
//     item: "flex items-start gap-3 my-2 bg-white rounded-full p-3 border border-emerald-50 shadow-sm hover:shadow transition-shadow min-w-0",
//     input: "flex-1 min-w-0 px-3 py-2 rounded-full border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-200",
//     removeButton: "p-2 rounded-full hover:bg-red-50 transition-colors"
//   },

//   // Slots styles
//   slots: {
//     container: (hasError) => 
//       `bg-linear-to-br from-white to-emerald-50 rounded-2xl p-4 ${
//         hasError 
//           ? "border-2 border-red-200" 
//           : "border border-emerald-50"
//       } shadow-sm`,
//     slotItem: "flex items-center gap-2 bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-100 px-2 py-2 my-1 rounded-full shadow hover:shadow-md transition-shadow min-w-0",
//     slotText: "text-xs whitespace-nowrap xl:text-xs lg:text-xs lg:whitespace-nowrap xl:whitespace-nowrap font-medium max-w-[180px] sm:max-w-[300px] md:max-w-[320px]"
//   },

//   // Toast notification styles
//   toast: {
//     container: "fixed top-6 right-6 z-50 w-full max-w-sm",
//     toastBase: "flex items-start gap-4 p-4 rounded-2xl border shadow-xl transform transition-all duration-300",
//     toastError: "bg-linear-to-r from-red-50 to-orange-50 border-red-100",
//     toastInfo: "bg-linear-to-r from-blue-50 to-cyan-50 border-blue-100",
//     toastSuccess: "bg-linear-to-r from-emerald-50 to-teal-50 border-emerald-100",
//     iconContainer: (type) => {
//       const styles = {
//         error: "bg-linear-to-r from-red-100 to-orange-100 text-red-600",
//         info: "bg-linear-to-r from-blue-100 to-cyan-100 text-blue-600",
//         success: "bg-linear-to-r from-emerald-100 to-teal-100 text-emerald-600"
//       };
//       return `flex items-center justify-center w-10 h-10 rounded-full ${styles[type] || styles.success}`;
//     },
//     title: "font-semibold text-sm text-gray-800",
//     message: "text-xs text-gray-600 mt-1 truncate"
//   },

//   // Label styles
//   labels: {
//     standard: "text-sm font-medium text-emerald-700",
//     small: "text-xs text-gray-500"
//   },

//   // Grid/Spacing styles
//   grids: {
//     main: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
//     formFields: "grid grid-cols-1 md:grid-cols-2 gap-6",
//     timeGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 mb-4",
//     timeSubGrid: "grid grid-cols-3 gap-2 min-w-0",
//     slotsGrid: "grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 overflow-auto gap-2 max-h-screen pr-2"
//   },

//   // Header action container
//   headerActions: "flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-3",

//   // Other reusable styles
//   icon: {
//     number: "font-semibold text-emerald-600",
//     clock: "w-4 h-4 xl:w-6 xl:h-6 text-emerald-600",
//     trash: "w-4 h-4 text-red-400",
//     removeInstruction: "w-4 h-4 text-red-400"
//   },

//   // Custom CSS for animations and scrollbars
//   customCSS: `
//     @keyframes slideIn {
//       from {
//         transform: translateX(12px);
//         opacity: 0;
//       }
//       to {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }
//     .animate-slideIn {
//       animation: slideIn 300ms ease both;
//     }

//     .max-h-44::-webkit-scrollbar,
//     .max-h-36::-webkit-scrollbar,
//     .overflow-auto::-webkit-scrollbar {
//       height: 6px;
//       width: 6px;
//     }
//     .max-h-44::-webkit-scrollbar-thumb,
//     .max-h-36::-webkit-scrollbar-thumb,
//     .overflow-auto::-webkit-scrollbar-thumb {
//       background: rgba(0,0,0,0.08);
//       border-radius: 9999px;
//     }
//   `
// };

// assets/dummyStyles.js - ADDING DOCTOR LIST STYLES

// ... (existing styles remain the same)
export const addServiceStyles = {
  // ================= CONTAINER =================
  container: {
    main:
      "relative min-h-screen font-serif bg-gradient-to-br from-cyan-50 via-white to-violet-50 flex items-center justify-center px-4 sm:px-6 py-10 overflow-hidden",

    form:
      "relative z-10 w-full max-w-6xl bg-white/80 backdrop-blur-2xl rounded-[40px] p-6 sm:p-10 shadow-2xl border border-white overflow-hidden"
  },

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  header: {
    title:
      "text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

    subtitle:
      "text-sm md:text-base text-slate-500 mt-3"
  },

  // ================= BUTTONS =================
  buttons: {
    reset:
      "w-full sm:w-auto px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

    submit:
      "inline-flex justify-center items-center gap-2 w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed",

    addInstruction:
      "inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 font-medium hover:bg-cyan-100 transition-all duration-300",

    uploadImage:
      "flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-medium shadow-sm hover:shadow-lg transition-all duration-300",

    removeImage:
      "px-4 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-medium hover:bg-red-100 transition-all duration-300",

    addSlot:
      "w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

    slotRemove:
      "p-2 rounded-full hover:bg-red-50 transition-all duration-300",

    toastClose:
      "p-2 rounded-full hover:bg-white/50 transition-all duration-300"
  },

  // ================= IMAGE UPLOAD =================
  imageUpload: {
    container: (hasError) =>
      `w-full rounded-[32px] p-5 ${
        hasError
          ? "border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50"
          : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100"
      } shadow-inner flex flex-col items-center gap-5`,

    preview:
      "w-full h-64 rounded-[28px] overflow-hidden bg-white flex items-center justify-center border border-slate-100 shadow-md",

    placeholder:
      "flex flex-col items-center text-slate-400"
  },

  // ================= FORM FIELDS =================
  formFields: {
    input: (hasError) =>
      `mt-2 w-full px-5 py-3.5 rounded-2xl bg-white text-slate-700 placeholder:text-slate-400 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 ${
        hasError
          ? "border-2 border-red-200 focus:ring-red-200"
          : "border border-slate-200 focus:ring-cyan-400"
      }`,

    textarea: (hasError) =>
      `mt-2 w-full px-5 py-4 rounded-[28px] bg-white text-slate-700 placeholder:text-slate-400 shadow-sm resize-none transition-all duration-300 focus:outline-none focus:ring-2 ${
        hasError
          ? "border-2 border-red-200 focus:ring-red-200"
          : "border border-slate-200 focus:ring-cyan-400"
      }`,

    select:
      "mt-2 w-full px-5 py-3.5 rounded-2xl border border-slate-200 text-slate-700 bg-white appearance-none focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300",

    smallSelect:
      "mt-1 w-full px-4 py-2.5 rounded-2xl border border-slate-200 text-slate-700 bg-white appearance-none focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300",

    timeSelect:
      "mt-1 w-full px-3 py-2.5 rounded-2xl border border-slate-200 text-slate-700 bg-white appearance-none focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300",

    ampmSelect:
      "mt-1 w-full px-3 py-2.5 rounded-2xl border border-slate-200 text-slate-700 bg-white appearance-none focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
  },

  // ================= INSTRUCTIONS =================
  instructions: {
    container: (hasError) =>
      `mt-4 space-y-3 ${
        hasError
          ? "ring-2 ring-red-100 rounded-[28px] p-3"
          : ""
      } max-h-52 overflow-auto pr-2`,

    item:
      "flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 min-w-0",

    input:
      "flex-1 min-w-0 px-4 py-2.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

    removeButton:
      "p-2 rounded-full hover:bg-red-50 transition-all duration-300"
  },

  // ================= SLOTS =================
  slots: {
    container: (hasError) =>
      `bg-gradient-to-br from-white to-cyan-50 rounded-[32px] p-5 ${
        hasError
          ? "border-2 border-red-200"
          : "border border-cyan-100"
      } shadow-inner`,

    slotItem:
      "flex items-center gap-3 bg-white border border-slate-100 px-4 py-3 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 min-w-0",

    slotText:
      "text-sm font-medium text-slate-700 truncate"
  },

  // ================= TOAST =================
  toast: {
    container:
      "fixed top-6 right-4 z-50 w-full max-w-sm",

    toastBase:
      "flex items-start gap-4 p-5 rounded-[28px] border shadow-2xl backdrop-blur-xl transition-all duration-300 animate-slideIn",

    toastError:
      "bg-white/90 border-red-200",

    toastInfo:
      "bg-white/90 border-cyan-200",

    toastSuccess:
      "bg-white/90 border-emerald-200",

    iconContainer: (type) => {
      const styles = {
        error:
          "bg-gradient-to-r from-red-100 to-orange-100 text-red-600",

        info:
          "bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-600",

        success:
          "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-600"
      };

      return `flex items-center justify-center w-11 h-11 rounded-2xl shadow-sm ${
        styles[type] || styles.success
      }`;
    },

    title:
      "font-bold text-sm text-slate-800",

    message:
      "text-xs text-slate-500 mt-1 truncate"
  },

  // ================= LABELS =================
  labels: {
    standard:
      "text-sm font-semibold text-slate-700",

    small:
      "text-xs text-slate-500"
  },

  // ================= GRIDS =================
  grids: {
    main:
      "grid grid-cols-1 lg:grid-cols-3 gap-10",

    formFields:
      "grid grid-cols-1 md:grid-cols-2 gap-7",

    timeGrid:
      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-5",

    timeSubGrid:
      "grid grid-cols-3 gap-3 min-w-0",

    slotsGrid:
      "grid md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[420px] overflow-auto pr-2"
  },

  // ================= HEADER ACTIONS =================
  headerActions:
    "flex w-full sm:w-auto flex-col sm:flex-row items-stretch sm:items-center gap-4",

  // ================= ICONS =================
  icon: {
    number:
      "font-bold text-cyan-600",

    clock:
      "w-5 h-5 text-cyan-600",

    trash:
      "w-4 h-4 text-red-500",

    removeInstruction:
      "w-4 h-4 text-red-500"
  },

  // ================= CUSTOM CSS =================
  customCSS: `
    @keyframes slideIn {
      from {
        transform: translateX(20px);
        opacity: 0;
      }

      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .animate-slideIn {
      animation: slideIn 0.35s ease both;
    }

    .overflow-auto::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    .overflow-auto::-webkit-scrollbar-thumb {
      background: rgba(148, 163, 184, 0.4);
      border-radius: 9999px;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};

// export const doctorListStyles = {
//   container: "min-h-screen font-serif bg-emerald-50 p-4 sm:p-6 md:p-8",
//   headerContainer: "max-w-6xl mx-auto mb-6",
//   headerTopSection: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
//   headerIconContainer: "flex items-center gap-3 w-full sm:w-auto",
//   headerIcon: "p-2 rounded-full bg-white shadow-sm transform transition",
//   headerIconSvg: "text-emerald-600",
//   headerTitle: "text-base sm:text-lg font-semibold text-emerald-800",
//   headerSubtitle: "text-sm sm:text-md text-emerald-600",
  
//   headerSearchContainer: "w-full sm:w-auto mt-3 sm:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
//   searchBox: "flex items-center w-full sm:w-96 bg-white rounded-full px-3 py-2 shadow-sm",
//   searchIcon: "text-emerald-400",
//   searchInput: "ml-3 w-full outline-none text-emerald-700 placeholder-emerald-400 bg-transparent",
//   clearButton: "px-3 py-2 cursor-pointer rounded-full bg-emerald-600 text-white shadow hover:opacity-95 transition w-full sm:w-auto",
  
//   filterContainer: "flex flex-wrap gap-2 pt-5",
//   filterButton: (isActive, color) => {
//     const base = "text-xs px-3 cursor-pointer py-1 rounded-full transition border";
//     if (color === 'emerald') {
//       return isActive
//         ? `${base} bg-emerald-600 text-white border-emerald-600`
//         : `${base} bg-white text-emerald-700 border-emerald-200`;
//     } else if (color === 'red') {
//       return isActive
//         ? `${base} bg-red-600 text-white border-red-600`
//         : `${base} bg-white text-red-600 border-red-100`;
//     }
//     return base;
//   },
  
//   loadingContainer: "text-center text-emerald-600 py-8",
//   noResultsContainer: "text-center text-emerald-600 py-8",
  
//   gridContainer: "max-w-6xl grid xl:grid-cols-2 lg:grid-cols-2 lg:gap-3 xl:gap-4 mx-auto space-y-4",
  
//   article: "bg-linear-to-r from-emerald-100/50 to-white rounded-2xl shadow-md border border-emerald-100 overflow-hidden transition-all duration-300",
//   articleContent: "flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 sm:p-4 md:p-5",
  
//   doctorImage: "w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-emerald-200 shadow-sm mx-auto sm:mx-0",
  
//   doctorInfoContainer: "flex-1 min-w-0 w-full",
//   doctorHeader: "flex flex-col sm:flex-row sm:items-start items-start justify-between gap-3 w-full",
//   doctorName: "text-base sm:text-lg md:text-xl text-emerald-800 font-medium truncate",
  
//   availabilityBadge: (isAvailable) => 
//     `ml-0 sm:ml-2 mt-2 sm:mt-0 inline-flex items-center gap-2 text-xs font-medium px-2 py-0.5 rounded-full ${
//       isAvailable
//         ? "bg-emerald-50 text-emerald-700"
//         : "bg-red-50 text-red-600"
//     }`,
//   availabilityDot: (isAvailable) => 
//     `w-2 h-2 rounded-full ${isAvailable ? "bg-emerald-600" : "bg-red-600"}`,
  
//   doctorDetails: "text-sm text-emerald-600 truncate mt-2 sm:mt-1",
  
//   ratingContainer: "flex items-center gap-3 mt-3 sm:mt-0 sm:ml-4",
//   rating: "text-sm text-emerald-700 flex items-center gap-1",
//   toggleButton: (isOpen) => 
//     `p-2 rounded-full cursor-pointer bg-white shadow-sm transform transition ${
//       isOpen ? "rotate-180" : "rotate-0"
//     }`,
  
//   statsContainer: "mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3",
//   statsLabel: "text-xs text-emerald-500",
//   statsValue: "text-sm text-emerald-700 font-medium flex items-center gap-2",
  
//   actionContainer: "w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2",
//   deleteButton: "px-3 py-1 cursor-pointer rounded-full bg-red-50 text-red-600 text-xs flex items-center gap-2 transition",
//   feesLabel: "text-md font-bold text-emerald-700",
//   feesValue: "text-sm text-emerald-800 font-medium flex items-center gap-1",
  
//   expandableContent: "px-4 md:px-5 bg-white overflow-auto sm:overflow-visible",
  
//   aboutSection: "col-span-2",
//   aboutHeading: "text-md font-bold text-emerald-700 mb-1",
//   aboutText: "text-sm text-emerald-600 break-words whitespace-normal",
  
//   qualificationsHeading: "text-md text-emerald-700 font-bold",
//   qualificationsText: "text-sm text-emerald-600 break-words whitespace-normal",
  
//   scheduleHeading: "text-md text-emerald-700 font-bold",
//   scheduleDate: "text-xs text-emerald-500",
//   scheduleSlot: "text-xs px-3 py-1 rounded-full border border-emerald-100 shadow-sm break-words",
  
//   statsSidebar: "col-span-1 flex flex-col sm:flex-row md:flex-col xl:flex-col lg:flex-col gap-3 items-start md:items-end",
//   statsItemHeading: "text-md text-emerald-700 font-bold",
//   statsItemValue: "text-sm text-emerald-700",
//   locationValue: "text-sm sm:whitespace-nowrap whitespace-normal text-emerald-700",
  
//   showMoreButton: "px-5 py-2 cursor-pointer rounded-full bg-white border border-emerald-300 shadow-sm hover:shadow-md transition",
//   showMoreContainer: "col-span-full flex justify-center mt-4",
// };

// Add to the existing dummyStyles.js file
export const doctorListStyles = {
  // ================= PAGE =================
  container:
    "relative min-h-screen font-serif bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-4 sm:px-6 py-8 overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  headerContainer:
    "relative z-10 max-w-7xl mx-auto mb-10",

  headerTopSection:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-6",

  headerIconContainer:
    "flex items-center gap-4",

  headerIcon:
    "p-4 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-2xl",

  headerIconSvg:
    "text-white",

  headerTitle:
    "text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerSubtitle:
    "text-sm md:text-base text-slate-500 mt-2",

  // ================= SEARCH =================
  headerSearchContainer:
    "w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4",

  searchBox:
    "flex items-center w-full sm:w-[380px] bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-cyan-400 transition-all duration-300",

  searchIcon:
    "text-slate-400 w-5 h-5",

  searchInput:
    "ml-3 w-full outline-none text-slate-700 placeholder:text-slate-400 bg-transparent text-sm",

  clearButton:
    "px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= FILTERS =================
  filterContainer:
    "flex flex-wrap gap-3 pt-6",

  filterButton: (isActive, color) => {
    const base =
      "text-sm px-4 py-2 rounded-2xl font-medium transition-all duration-300 border shadow-sm";

    if (color === "emerald") {
      return isActive
        ? `${base} bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-500 shadow-cyan-200`
        : `${base} bg-white text-cyan-700 border-cyan-100 hover:bg-cyan-50`;
    }

    if (color === "red") {
      return isActive
        ? `${base} bg-gradient-to-r from-red-500 to-rose-500 text-white border-red-500 shadow-red-200`
        : `${base} bg-white text-red-600 border-red-100 hover:bg-red-50`;
    }

    return base;
  },

  // ================= STATES =================
  loadingContainer:
    "text-center text-cyan-600 py-12 text-lg font-semibold",

  noResultsContainer:
    "text-center text-slate-500 py-12 text-lg font-medium",

  // ================= GRID =================
  gridContainer:
    "relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6",

  // ================= CARD =================
  article:
    "group relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-2xl border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",

  articleTopLine:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  articleContent:
    "flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5",

  // ================= IMAGE =================
  doctorImage:
    "w-20 h-20 rounded-3xl object-cover border-4 border-white shadow-xl",

  // ================= INFO =================
  doctorInfoContainer:
    "flex-1 min-w-0 w-full",

  doctorHeader:
    "flex flex-col sm:flex-row sm:items-start justify-between gap-4 w-full",

  doctorName:
    "text-xl font-bold text-slate-800 truncate",

  availabilityBadge: (isAvailable) =>
    `inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${
      isAvailable
        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
        : "bg-red-50 text-red-600 border border-red-200"
    }`,

  availabilityDot: (isAvailable) =>
    `w-2.5 h-2.5 rounded-full ${
      isAvailable ? "bg-emerald-500" : "bg-red-500"
    }`,

  doctorDetails:
    "text-sm text-slate-500 mt-2",

  // ================= RATING =================
  ratingContainer:
    "flex items-center gap-3 mt-4",

  rating:
    "text-sm font-medium text-amber-500 flex items-center gap-1",

  toggleButton: (isOpen) =>
    `p-2.5 rounded-2xl bg-white shadow-md transition-all duration-300 ${
      isOpen
        ? "rotate-180 shadow-cyan-100"
        : "rotate-0"
    }`,

  // ================= STATS =================
  statsContainer:
    "mt-5 flex flex-wrap items-center gap-4",

  statsLabel:
    "text-xs uppercase tracking-wide text-slate-400",

  statsValue:
    "text-sm font-semibold text-slate-700 flex items-center gap-2",

  // ================= ACTIONS =================
  actionContainer:
    "w-full sm:w-auto flex items-center justify-between gap-3",

  deleteButton:
    "px-4 py-2 rounded-2xl bg-red-50 text-red-600 text-sm font-medium flex items-center gap-2 border border-red-100 hover:bg-red-100 transition-all duration-300",

  feesLabel:
    "text-sm font-semibold text-slate-500",

  feesValue:
    "text-lg font-bold text-violet-600 flex items-center gap-1",

  // ================= EXPANDABLE CONTENT =================
  expandableContent:
    "px-5 pb-5 bg-white/70 backdrop-blur-xl border-t border-slate-100 overflow-hidden",

  // ================= ABOUT =================
  aboutSection:
    "col-span-2",

  aboutHeading:
    "text-lg font-bold text-slate-800 mb-2",

  aboutText:
    "text-sm leading-relaxed text-slate-600",

  // ================= QUALIFICATIONS =================
  qualificationsHeading:
    "text-lg font-bold text-slate-800 mt-5 mb-2",

  qualificationsText:
    "text-sm leading-relaxed text-slate-600",

  // ================= SCHEDULE =================
  scheduleHeading:
    "text-lg font-bold text-slate-800 mt-5 mb-3",

  scheduleDate:
    "text-xs font-medium text-slate-400 mb-2",

  scheduleSlot:
    "text-xs px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 font-medium shadow-sm",

  // ================= SIDEBAR =================
  statsSidebar:
    "col-span-1 flex flex-col gap-4 mt-5",

  statsItemHeading:
    "text-sm font-semibold text-slate-500 uppercase tracking-wide",

  statsItemValue:
    "text-sm font-bold text-slate-700",

  locationValue:
    "text-sm text-slate-600 break-words",

  // ================= SHOW MORE =================
  showMoreButton:
    "px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  showMoreContainer:
    "col-span-full flex justify-center mt-6",

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-lg {
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
    }

    .shadow-2xl {
      box-shadow: 0 30px 70px rgba(15, 23, 42, 0.16);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};

export const navbarStyles = {
  // Layout styles
  header:
    "relative font-serif bg-white/80 backdrop-blur-xl border-b border-emerald-100 shadow-sm",

  navContainer:
    "mx-auto max-w-7xl lg:px-6 xl:px-2 px-4 py-3",

  flexContainer:
    "flex items-center justify-between gap-2",

  // Logo section styles
  logoContainer:
    "flex items-center gap-2 group",

  // SMALL LOGO
  logoImage:
    "w-12 h-12 rounded-xl object-cover border border-white shadow-md transition-all duration-300 group-hover:scale-105",

  // SMALL TITLE
  logoLink:
    "text-2xl lg:text-lg xl:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap",

  // SMALL SUBTITLE
  logoSubtext:
    "text-[10px] xl:block text-slate-500 whitespace-nowrap",

  // Center navigation (desktop)
  centerNavContainer:
    "hidden lg:flex items-center justify-center relative flex-1 mx-4",

  glowEffect:
    "relative rounded-3xl p-[1px] bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-200 shadow-md",

  centerNavInner:
    "relative flex items-center",

  centerNavScrollContainer:
    "center-inner relative whitespace-nowrap rounded-3xl bg-white/95 backdrop-blur-xl lg:px-2 px-3 py-2 flex items-center gap-1 shadow-lg border border-slate-100 overflow-x-auto",

  // Center nav items
  centerNavItemBase:
    "relative flex flex-col lg:text-[11px] xl:text-sm items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 font-medium whitespace-nowrap",

  centerNavItemActive:
    "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-sm",

  centerNavItemInactive:
    "text-slate-700 hover:bg-emerald-50 hover:text-emerald-600",

  // Right section styles
  rightContainer:
    "flex items-center gap-2",

  signOutButton:
    "hidden lg:flex px-3 py-2 cursor-pointer rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap",

  loginButton:
    "px-3 py-2 cursor-pointer rounded-2xl border border-emerald-100 bg-white text-emerald-600 text-xs shadow-sm hover:shadow-md hover:bg-emerald-50 transition-all duration-300",

  // Mobile menu button
  mobileMenuButton:
    "lg:hidden p-2 rounded-xl bg-white shadow-md border border-slate-100",

  // Mobile menu overlay
  mobileOverlay:
    "fixed inset-0 z-10 lg:hidden bg-black/20 backdrop-blur-sm",

  // Mobile menu container
  mobileMenuContainer:
    "mt-3 lg:hidden z-20 relative",

  mobileMenuInner:
    "rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl p-4 space-y-2 border border-slate-100",

  // Mobile menu items
  mobileItemBase:
    "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300",

  mobileItemActive:
    "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-sm",

  mobileItemInactive:
    "text-slate-700 hover:bg-emerald-50 hover:text-emerald-600",

  // Mobile auth section
  mobileAuthContainer:
    "pt-3 border-t border-slate-100 mt-3",

  mobileSignOutButton:
    "w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold shadow-sm",

  mobileLoginButton:
    "w-full cursor-pointer py-2.5 rounded-xl border border-emerald-100 bg-white text-emerald-600 font-semibold shadow-sm",

  // Indicator
  indicator:
    "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 ease-out rounded-full",

  // Cursor utilities
  cursorPointer:
    "cursor-pointer",

  // Shadow
  shadow:
    "shadow",

  shadowMd:
    "shadow-md",

  shadowLg:
    "shadow-lg",

  shadowSm:
    "shadow-sm",
};

// export const navbarStyles = {
//   // Layout styles
//   header: "relative font-serif",
//   navContainer: "mx-auto max-w-7xl lg:px-7 xl:px-2 px-4 py-5",
//   flexContainer: "flex items-center justify-between",
  
//   // Logo section styles
//   logoContainer: "flex items-center gap-2",
//   logoImage: "w-18 h-18 rounded-full",
//   logoLink: "text-3xl xl:block lg:text-xs xl:text-xl font-bold text-green-700",
//   logoSubtext: "text-xs xl:block text-gray-500",
  
//   // Center navigation (desktop)
//   centerNavContainer: "hidden lg:flex items-center justify-center relative",
//   glowEffect: "glow relative rounded-3xl p-1 bg-linear-to-r from-emerald-100 via-emerald-200 to-emerald-100",
//   centerNavInner: "relative flex items-center",
//   centerNavScrollContainer: "center-inner relative whitespace-nowrap rounded-3xl bg-white/95 lg:px-2 px-4 py-2 flex items-center gap-2 shadow-lg border border-gray-100 overflow-x-auto",
  
//   // Center nav items
//   centerNavItemBase: "relative flex flex-col lg:text-xs lg:-mx-2 xl:text-md items-center gap-1 px-3 py-2 rounded-lg transition-all text-sm",
//   centerNavItemActive: "text-emerald-400 font-semibold",
//   centerNavItemInactive: "text-gray-700 hover:text-emerald-600",
  
//   // Right section styles
//   rightContainer: "flex items-center gap-3",
//   signOutButton: "hidden lg:mx-1 lg:text-xs whitespace-nowrap xl:mx-1 lg:-mr-6 xl:mr-5 lg:flex px-4 py-2 cursor-pointer rounded-full bg-amber-500 text-white text-sm items-center gap-2 shadow-sm",
//   loginButton: "px-3 py-2 cursor-pointer rounded-full border bg-white text-emerald-600 text-sm shadow-sm",
  
//   // Mobile menu button
//   mobileMenuButton: "lg:hidden p-2 rounded-full bg-white shadow",
  
//   // Mobile menu overlay
//   mobileOverlay: "fixed inset-0 z-10 lg:hidden",
  
//   // Mobile menu container
//   mobileMenuContainer: "mt-3 lg:hidden z-20 relative",
//   mobileMenuInner: "rounded-xl bg-white shadow-md p-3 space-y-2 border",
  
//   // Mobile menu items
//   mobileItemBase: "flex items-center gap-3 px-2 py-2 rounded-md",
//   mobileItemActive: "bg-emerald-50 text-emerald-600",
//   mobileItemInactive: "hover:bg-gray-50",
  
//   // Mobile auth section
//   mobileAuthContainer: "pt-2 border-t mt-2",
//   mobileSignOutButton: "w-full py-2 rounded-full border bg-amber-500 text-white font-medium",
//   mobileLoginButton: "w-full cursor-pointer py-2 rounded-full border bg-white text-emerald-600 font-medium",
  
//   // Indicator (for active navigation)
//   indicator: "absolute bottom-0 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ease-out rounded-full",
  
//   // Cursor utilities
//   cursorPointer: "cursor-pointer",
  
//   // Text colors
//   textGreen700: "text-green-700",
//   textGray500: "text-gray-500",
//   textGray700: "text-gray-700",
//   textEmerald600: "text-emerald-600",
//   textEmerald400: "text-emerald-400",
//   textWhite: "text-white",
  
//   // Background colors
//   bgWhite: "bg-white",
//   bgAmber500: "bg-amber-500",
//   bgEmerald50: "bg-emerald-50",
//   bgEmerald100: "bg-emerald-100",
//   bgEmerald200: "bg-emerald-200",
  
//   // Border colors
//   borderGray100: "border-gray-100",
//   borderEmerald100: "border-emerald-100",
  
//   // Shadow
//   shadow: "shadow",
//   shadowMd: "shadow-md",
//   shadowLg: "shadow-lg",
//   shadowSm: "shadow-sm",
// };


// assets/dummyStyles.js

// ... existing AddService styles above ...

// export const heroStyles = {
//   // Container styles
//   container: "min-h-screen font-sans bg-linear-to-b from-emerald-50 to-white",
//   mainContainer: "flex items-center pt-28 justify-center px-6 py-16",
//   section: "w-full max-w-4xl",
  
//   // Background decoration styles
//   decorativeBg: {
//     container: "relative",
//     blurBackground: "absolute -inset-8 -z-10 flex items-center justify-center",
//     blurShape: "w-full h-44 md:h-56 rounded-3xl bg-emerald-100/60 blur-3xl"
//   },
  
//   // Content container
//   contentBox: "bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-xl p-8 md:p-12 text-center",
  
//   // Logo/Image styles
//   logoContainer: "mx-auto mb-4 w-24 h-24 flex items-center justify-center",
//   logo: "w-50 h-50 object-contain",
  
//   // Text styles
//   heading: "text-3xl md:text-4xl font-extrabold text-emerald-900 mb-2",
//   description: "text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6",
  
//   // Info cards styles
//   infoCards: {
//     container: "mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4",
//     card: "p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-left",
//     cardTitle: "font-semibold text-emerald-800",
//     cardText: "text-sm text-gray-600 mt-1"
//   }
// };

export const heroStyles = {
  // ================= CONTAINER =================
  container:
    "min-h-screen font-sans bg-gradient-to-br from-cyan-50 via-white to-emerald-50 overflow-hidden",

  mainContainer:
    "flex items-center justify-center px-4 sm:px-6 py-20 pt-28",

  section:
    "w-full max-w-5xl relative",

  // ================= BACKGROUND DECORATION =================
  decorativeBg: {
    container:
      "relative",

    blurBackground:
      "absolute -inset-10 -z-10 flex items-center justify-center",

    blurShape:
      "w-full h-56 md:h-72 rounded-[40px] bg-gradient-to-r from-cyan-200/40 via-emerald-200/40 to-blue-200/40 blur-3xl"
  },

  // ================= CONTENT BOX =================
  contentBox:
    "relative bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[40px] p-8 sm:p-10 md:p-14 text-center overflow-hidden",

  // ================= FLOATING GRADIENTS =================
  floatingGlow1:
    "absolute top-0 left-0 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-20",

  floatingGlow2:
    "absolute bottom-0 right-0 w-52 h-52 bg-emerald-200 rounded-full blur-3xl opacity-20",

  // ================= LOGO =================
  logoContainer:
    "mx-auto mb-6 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center rounded-3xl bg-white shadow-xl border border-slate-100",

  logo:
    "w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md",

  // ================= TEXT =================
  heading:
    "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4 leading-tight",

  highlight:
    "text-cyan-600",

  description:
    "text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8",

  // ================= CTA BUTTONS =================
  buttonContainer:
    "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10",

  primaryButton:
    "px-7 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-xl hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  secondaryButton:
    "px-7 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  // ================= INFO CARDS =================
  infoCards: {
    container:
      "mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",

    card:
      "group bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left",

    iconContainer:
      "w-12 h-12 rounded-2xl bg-gradient-to-r from-emerald-100 to-cyan-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300",

    cardTitle:
      "font-bold text-slate-800 text-lg",

    cardText:
      "text-sm text-slate-500 mt-2 leading-relaxed"
  },

  // ================= STATS =================
  statsContainer:
    "mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5",

  statCard:
    "bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300",

  statValue:
    "text-2xl md:text-3xl font-extrabold text-cyan-600",

  statLabel:
    "text-sm text-slate-500 mt-1",

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-2xl {
      box-shadow: 0 30px 70px rgba(15, 23, 42, 0.12);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};

// Add to the existing dummyStyles.js file
// export const serviceListStyles = {
//   // Layout styles
//   pageContainer: "p-4 sm:p-6 max-w-6xl font-serif mx-auto min-h-screen bg-linear-to-b from-green-50 via-white to-white",
  
//   // Header styles
//   headerContainer: "flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4",
//   headerTitle: "text-2xl md:text-3xl font-extrabold text-emerald-700",
//   headerSubtitle: "text-sm text-emerald-500 mt-1",
  
//   // Filter and search styles
//   filterContainer: "flex flex-col md:flex-col items-stretch md:items-center gap-3 w-full md:w-auto",
//   filterButtonsContainer: "inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-100 bg-white p-1",
//   filterButton: "px-3 py-1 cursor-pointer rounded-full text-sm transition",
//   filterButtonActive: "bg-emerald-600 text-white",
//   filterButtonInactive: "text-emerald-700 bg-transparent",
//   searchContainer: "relative w-full md:w-auto",
//   searchIcon: "absolute inset-y-0 left-3 flex items-center pointer-events-none",
//   searchIconSvg: "w-5 h-5 text-emerald-300",
//   searchInput: "pl-12 pr-4 py-2 rounded-full border border-emerald-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 transition w-full md:w-72 bg-white",
  
//   // Grid styles
//   servicesGrid: "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6",
  
//   // Service card styles
//   serviceCard: "bg-white rounded-2xl overflow-hidden transform transition hover:-translate-y-1 hover:shadow-2xl border border-emerald-50",
//   serviceCardContent: "flex flex-col sm:flex-row sm:items-start gap-4 p-4 cursor-pointer",
//   serviceImageContainer: "w-full sm:w-20 h-40 sm:h-20 rounded-lg overflow-hidden bg-emerald-50 ring-1 ring-emerald-50 flex-shrink-0",
//   serviceImage: "w-full h-full object-cover",
//   serviceImagePlaceholder: "w-full h-full flex items-center justify-center text-emerald-300",
//   serviceInfoContainer: "flex-1 min-w-0",
//   serviceHeader: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2",
//   serviceName: "text-lg font-semibold text-emerald-700 truncate",
//   serviceDescription: "text-sm text-emerald-500 mt-1 line-clamp-2",
//   servicePriceContainer: "text-left sm:text-right mt-2 sm:mt-0",
//   servicePrice: "text-md font-semibold text-emerald-700",
//   availabilityBadge: "text-xs mt-1 inline-flex items-center gap-1 px-2 py-1 rounded-full",
//   availabilityAvailable: "bg-emerald-50 text-emerald-700",
//   availabilityUnavailable: "bg-rose-50 text-rose-700",
//   slotsInfo: "mt-2 flex items-center gap-2 font-bold text-sm text-emerald-600",
//   chevronContainer: "pl-3 self-start sm:self-center",
//   chevronIcon: "w-6 h-6 transition-transform",
//   chevronOpen: "rotate-180 text-emerald-400",
//   chevronClosed: "text-emerald-300",
  
//   // Details section
//   detailsContainer: "px-4 pb-4 transition-all",
  
//   // Edit form styles
//   editForm: "space-y-4",
//   editImageContainer: "flex flex-col sm:flex-row gap-4",
//   editImagePreview: "w-full sm:w-36 h-36 rounded-lg overflow-hidden bg-emerald-50 ring-1 ring-emerald-50 flex-shrink-0",
//   editFormFields: "flex-1 space-y-2",
//   inputBase: "w-full border rounded-lg px-3 py-2 outline-none transition focus:ring-2 focus:ring-green-200 focus:border-green-300 border-green-100 bg-white",
//   availabilitySelectContainer: "mt-1 flex items-center gap-2",
//   availabilityLabel: "text-sm text-emerald-600",
//   availabilitySelect: "border rounded-full cursor-pointer px-3 py-1 outline-none focus:ring-2 focus:ring-emerald-200 border-emerald-300",
//   fileInputContainer: "mt-2",
//   fileInputLabel: "text-sm block mb-1 text-emerald-700",
//   fileInput: "w-full border border-emerald-300 rounded-full px-4 py-2 text-sm bg-white cursor-pointer file:bg-emerald-50 file:border-0 file:px-4 file:py-1 file:rounded-full file:text-emerald-700 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition",
//   textarea: "min-h-[68px]",
//   textareaInstructions: "min-h-[80px]",
//   formLabel: "block text-md font-bold mb-1 text-emerald-600",
//   formLabelSmall: "block text-sm text-emerald-600",
  
//   // Slots management
//   slotsHeader: "flex items-center justify-between",
//   addSlotButton: "inline-flex cursor-pointer items-center gap-2 text-sm px-2 py-1 rounded-full border border-emerald-100",
//   slotsContainer: "space-y-2 mt-2",
//   slotRow: "flex flex-col sm:flex-row sm:items-center gap-2 w-full",
//   slotDateInput: "border rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-emerald-200 border-emerald-100 w-full sm:w-auto",
//   slotTimeContainer: "flex gap-2 items-center w-full sm:w-auto",
//   slotSelect: "border rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-emerald-200 border-emerald-100 w-20",
//   removeSlotButton: "px-2 py-1 rounded-full cursor-pointer border-red-500 bg-red-300 border text-sm text-black",
  
//   // Form action buttons
//   formActions: "flex flex-col sm:flex-row items-center gap-2 justify-end",
//   cancelButton: "px-3 py-2 rounded-full cursor-pointer border-red-600 bg-red-300 border w-full sm:w-auto",
//   saveButton: "px-3 py-2 rounded-full cursor-pointer bg-emerald-600 text-white w-full sm:w-auto",
  
//   // View mode styles
//   viewSection: "space-y-3",
//   viewSectionTitle: "text-md font-bold text-emerald-700",
//   viewSectionContent: "text-md text-emerald-500 mt-1",
//   instructionsList: "list-disc list-inside text-md text-emerald-500 mt-1 space-y-1",
//   slotsList: "mt-2 space-y-2 text-sm text-emerald-600",
//   noSlotsMessage: "text-emerald-300",
//   slotItem: "flex font-bold items-center gap-3",
//   slotIcon: "w-4 h-4 text-emerald-400",
  
//   // Action buttons (view mode)
//   viewActions: "flex items-center gap-2 justify-end",
//   editButton: "inline-flex bg-emerald-200 cursor-pointer items-center gap-2 px-3 py-2 rounded-full border border-emerald-300",
//   removeButton: "inline-flex items-center bg-red-200 cursor-pointer gap-2 px-3 py-2 rounded-full border text-rose-600",
  
//   // Empty state
//   emptyState: "text-center text-emerald-300 mt-8",
  
//   // Toast styles
//   toastContainerTop: "fixed right-3 top-3 z-50 space-y-3",
//   toastContainerBottom: "fixed right-3 bottom-3 z-50 space-y-3",
//   toast: "transform transition-all",
//   toastAnimated: "animate-bounce",
//   toastInner: "max-w-sm px-4 py-3 rounded-lg shadow-lg border",
//   toastSuccess: "bg-white border-emerald-100",
//   toastError: "bg-white border-slate-100",
//   toastContent: "flex items-start gap-3",
//   toastIconSuccess: "text-emerald-500",
//   toastIconError: "text-slate-400",
//   toastIconSvg: "w-5 h-5",
//   toastMessage: "flex-1 text-sm text-emerald-700",
//   toastCloseButton: "text-emerald-300",
//   toastCloseIcon: "w-4 h-4",
  
//   // Text colors
//   textEmerald300: "text-emerald-300",
//   textEmerald400: "text-emerald-400",
//   textEmerald500: "text-emerald-500",
//   textEmerald600: "text-emerald-600",
//   textEmerald700: "text-emerald-700",
//   textRose600: "text-rose-600",
//   textRose700: "text-rose-700",
  
//   // Cursor utilities
//   cursorPointer: "cursor-pointer",
  
//   // Display utilities
//   block: "block",
//   hidden: "hidden",
// };
export const serviceListStyles = {
  // ================= PAGE =================
  pageContainer:
    "min-h-screen font-serif bg-gradient-to-br from-cyan-50 via-white to-emerald-50 px-4 sm:px-6 py-8", // :contentReference[oaicite:0]{index=0}

  // ================= HEADER =================
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10",

  headerTitle:
    "text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent",

  headerSubtitle:
    "text-sm text-slate-500 mt-2",

  // ================= FILTER & SEARCH =================
  filterContainer:
    "flex flex-col gap-4 w-full lg:w-auto",

  filterButtonsContainer:
    "inline-flex flex-wrap items-center gap-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-100 p-2 shadow-lg",

  filterButton:
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer",

  filterButtonActive:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md",

  filterButtonInactive:
    "text-slate-600 hover:bg-cyan-50 hover:text-cyan-700",

  searchContainer:
    "relative w-full lg:w-auto",

  searchIcon:
    "absolute inset-y-0 left-4 flex items-center pointer-events-none",

  searchIconSvg:
    "w-5 h-5 text-slate-400",

  searchInput:
    "pl-12 pr-4 py-3 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition w-full lg:w-80 bg-white/90 backdrop-blur-xl text-slate-700 placeholder:text-slate-400",

  // ================= GRID =================
  servicesGrid:
    "grid grid-cols-1 xl:grid-cols-2 gap-6",

  // ================= SERVICE CARD =================
  serviceCard:
    "group bg-white/80 backdrop-blur-xl rounded-[30px] overflow-hidden border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",

  serviceCardContent:
    "flex flex-col sm:flex-row sm:items-start gap-5 p-5 cursor-pointer",

  serviceImageContainer:
    "w-full sm:w-24 h-44 sm:h-24 rounded-2xl overflow-hidden bg-cyan-50 border border-cyan-100 flex-shrink-0 shadow-sm",

  serviceImage:
    "w-full h-full object-cover group-hover:scale-105 transition-all duration-500",

  serviceImagePlaceholder:
    "w-full h-full flex items-center justify-center text-cyan-300",

  serviceInfoContainer:
    "flex-1 min-w-0",

  serviceHeader:
    "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3",

  serviceName:
    "text-xl font-bold text-slate-800 truncate",

  serviceDescription:
    "text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed",

  servicePriceContainer:
    "text-left sm:text-right mt-2 sm:mt-0",

  servicePrice:
    "text-lg font-bold text-cyan-600",

  availabilityBadge:
    "text-xs mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium border",

  availabilityAvailable:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  availabilityUnavailable:
    "bg-red-50 text-red-600 border-red-200",

  slotsInfo:
    "mt-3 flex items-center gap-2 font-semibold text-sm text-cyan-600",

  chevronContainer:
    "pl-3 self-start sm:self-center",

  chevronIcon:
    "w-6 h-6 transition-transform duration-300",

  chevronOpen:
    "rotate-180 text-cyan-500",

  chevronClosed:
    "text-slate-300",

  // ================= DETAILS =================
  detailsContainer:
    "px-5 pb-5 transition-all duration-300",

  // ================= EDIT FORM =================
  editForm:
    "space-y-5",

  editImageContainer:
    "flex flex-col sm:flex-row gap-5",

  editImagePreview:
    "w-full sm:w-40 h-40 rounded-2xl overflow-hidden bg-cyan-50 border border-cyan-100 flex-shrink-0 shadow-sm",

  editFormFields:
    "flex-1 space-y-4",

  inputBase:
    "w-full border border-slate-200 rounded-2xl px-4 py-3 outline-none transition focus:ring-2 focus:ring-cyan-300 bg-white text-slate-700 placeholder:text-slate-400 shadow-sm",

  availabilitySelectContainer:
    "mt-2 flex items-center gap-3",

  availabilityLabel:
    "text-sm text-slate-600",

  availabilitySelect:
    "border border-slate-200 rounded-xl cursor-pointer px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-300 bg-white text-slate-700",

  fileInputContainer:
    "mt-3",

  fileInputLabel:
    "text-sm block mb-2 text-slate-700 font-medium",

  fileInput:
    "w-full border border-slate-200 rounded-2xl px-4 py-3 text-sm bg-white cursor-pointer file:bg-cyan-50 file:border-0 file:px-4 file:py-2 file:rounded-xl file:text-cyan-700 hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 transition",

  textarea:
    "min-h-[80px]",

  textareaInstructions:
    "min-h-[100px]",

  formLabel:
    "block text-sm font-semibold mb-2 text-slate-700",

  formLabelSmall:
    "block text-sm text-slate-500",

  // ================= SLOTS =================
  slotsHeader:
    "flex items-center justify-between",

  addSlotButton:
    "inline-flex cursor-pointer items-center gap-2 text-sm px-4 py-2 rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-700 font-medium hover:bg-cyan-100 transition-all duration-300",

  slotsContainer:
    "space-y-3 mt-3",

  slotRow:
    "flex flex-col sm:flex-row sm:items-center gap-3 w-full",

  slotDateInput:
    "border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300 w-full sm:w-auto",

  slotTimeContainer:
    "flex gap-2 items-center w-full sm:w-auto",

  slotSelect:
    "border border-slate-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300 w-24 bg-white",

  removeSlotButton:
    "px-3 py-2 rounded-xl cursor-pointer bg-red-50 border border-red-200 text-red-600 text-sm hover:bg-red-100 transition-all duration-300",

  // ================= FORM ACTIONS =================
  formActions:
    "flex flex-col sm:flex-row items-center gap-3 justify-end",

  cancelButton:
    "px-5 py-3 rounded-2xl cursor-pointer bg-red-50 border border-red-200 text-red-600 font-medium w-full sm:w-auto hover:bg-red-100 transition-all duration-300",

  saveButton:
    "px-5 py-3 rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold w-full sm:w-auto shadow-lg hover:shadow-cyan-200 transition-all duration-300",

  // ================= VIEW MODE =================
  viewSection:
    "space-y-4",

  viewSectionTitle:
    "text-lg font-bold text-slate-800",

  viewSectionContent:
    "text-sm text-slate-600 leading-relaxed mt-1",

  instructionsList:
    "list-disc list-inside text-sm text-slate-600 mt-2 space-y-2",

  slotsList:
    "mt-3 space-y-3 text-sm text-cyan-600",

  noSlotsMessage:
    "text-slate-400",

  slotItem:
    "flex items-center gap-3 font-medium",

  slotIcon:
    "w-4 h-4 text-cyan-500",

  // ================= ACTION BUTTONS =================
  viewActions:
    "flex items-center gap-3 justify-end",

  editButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 font-medium hover:bg-cyan-100 transition-all duration-300",

  removeButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-red-50 border border-red-200 text-red-600 font-medium hover:bg-red-100 transition-all duration-300",

  // ================= EMPTY =================
  emptyState:
    "text-center text-slate-400 mt-12 text-lg",

  // ================= TOAST =================
  toastContainerTop:
    "fixed right-4 top-4 z-50 space-y-3",

  toastContainerBottom:
    "fixed right-4 bottom-4 z-50 space-y-3",

  toast:
    "transform transition-all duration-300",

  toastAnimated:
    "animate-bounce",

  toastInner:
    "max-w-sm px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl",

  toastSuccess:
    "bg-white/90 border-emerald-100",

  toastError:
    "bg-white/90 border-red-100",

  toastContent:
    "flex items-start gap-3",

  toastIconSuccess:
    "text-emerald-500",

  toastIconError:
    "text-red-400",

  toastIconSvg:
    "w-5 h-5",

  toastMessage:
    "flex-1 text-sm text-slate-700",

  toastCloseButton:
    "text-slate-400 hover:text-slate-600 transition",

  toastCloseIcon:
    "w-4 h-4",

  // ================= UTILITIES =================
  cursorPointer:
    "cursor-pointer",

  block:
    "block",

  hidden:
    "hidden",
};


// assets/dummyStyles.js - ADDING SERVICE APPOINTMENTS STYLES

// ... (existing styles remain the same)

// export const serviceAppointmentsStyles = {
//   container: "p-4 sm:p-6 md:p-6 font-serif",
  
//   headerContainer: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6",
//   headerTitleContainer: "min-w-0",
//   headerTitle: "text-2xl md:text-3xl font-extrabold text-emerald-800",
//   headerSubtitle: "text-sm text-gray-500 mt-1",
  
//   searchContainer: "w-full md:w-96 flex flex-col gap-2",
//   searchInputWrapper: "flex items-center gap-3",
//   searchLabel: "relative block w-full",
//   searchIconContainer: "absolute left-3 pointer-events-none",
//   searchIcon: "w-4 h-4 text-emerald-400",
//   searchInput: "pl-10 pr-10 w-full rounded-full border border-emerald-200 bg-white/90 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
//   clearSearchButton: "absolute right-3 rounded-full p-1 hover:bg-gray-100",
//   clearSearchIcon: "w-4 h-4 text-gray-500",
  
//   statusFilterSelect: "text-sm px-3 py-2 cursor-pointer rounded-full border border-emerald-400",
//   searchInfo: "mt-2 text-xs text-gray-500 flex items-center justify-between",
//   refreshButton: "text-xs text-emerald-600 hover:underline",
  
//   loadingContainer: "col-span-full rounded-2xl p-8 bg-white/90 border border-emerald-50 shadow-sm flex items-center justify-center gap-3",
//   errorContainer: "col-span-full rounded-2xl p-4 bg-rose-50 border border-rose-100 text-rose-700",
  
//   noResultsContainer: "col-span-full rounded-2xl p-8 bg-white/90 border border-emerald-50 shadow-sm flex items-center justify-center flex-col gap-3",
//   noResultsIcon: "text-3xl text-emerald-300",
//   noResultsText: "text-sm text-gray-600",
//   noResultsSubtext: "text-xs text-gray-400",
  
//   gridContainer: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch",
  
//   article: "group relative rounded-3xl p-1 animated-border h-full transform transition-all duration-300 hover:-translate-y-2",
//   cardInner: "card-inner rounded-2xl overflow-hidden border-2 border-emerald-300/60 p-5 bg-white/90 shadow-lg h-full flex flex-col justify-between",
  
//   cardHeader: "flex flex-col sm:flex-row sm:items-start justify-between gap-4",
//   patientInfoContainer: "flex items-start gap-4 min-w-0",
//   patientAvatar: "rounded-full w-12 h-12 flex items-center justify-center bg-emerald-100/70",
//   patientAvatarIcon: "h-6 w-6 text-emerald-700",
//   patientInfo: "min-w-0",
//   patientName: "text-lg md:text-sm lg:text-xs xl:text-md whitespace-nowrap font-bold leading-tight text-emerald-900 w-full line-clamp-2",
//   patientDetails: "text-sm text-gray-500 mt-1",
  
//   statusContainer: "flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0",
  
//   detailsContainer: "mt-4 flex flex-col gap-3 text-gray-700",
//   detailItem: "flex items-center gap-3 text-base",
//   detailIcon: "w-4 h-4 text-emerald-500",
//   detailText: "font-medium truncate",
//   feesText: "font-semibold",
//   serviceText: "mt-2 text-base text-gray-600",
//   serviceName: "font-semibold text-emerald-800",
  
//   actionsContainer: "mt-4 flex items-center justify-between",
//   actionsInnerContainer: "flex items-center gap-2 w-full",
//   cancelButton: (isLocked) => 
//     `px-3 py-1 rounded-full text-sm border ${
//       isLocked
//         ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
//         : "bg-white text-rose-600 border-rose-200 hover:shadow-sm"
//     }`,
  
//   legendContainer: "mt-6 p-4 rounded-lg bg-white/80 shadow-inner border border-emerald-100 text-sm flex flex-col sm:flex-row flex-wrap items-center gap-4",
//   legendItem: "flex items-center gap-2",
//   legendDot: "w-3 h-3 rounded-full",
  
//   // StatusBadge component styles
//   statusBadge: (status) => {
//     const map = {
//       Pending: "bg-yellow-100 text-yellow-800",
//       Confirmed: "bg-emerald-100 text-emerald-800",
//       Canceled: "bg-red-100 text-red-800",
//       Completed: "bg-sky-100 text-sky-800",
//       Rescheduled: "bg-indigo-100 text-indigo-800",
//     };
//     const classes = map[status] || "bg-gray-100 text-gray-800";
//     return `inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${classes}`;
//   },
  
//   // StatusSelect component styles
//   statusSelect: (terminal) => 
//     `text-sm cursor-pointer px-3 py-1 rounded-full border focus:outline-none transition ${
//       terminal
//         ? "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200"
//         : "bg-white text-emerald-800 border-emerald-400"
//     }`,
  
//   // RescheduleButton component styles
//   rescheduleButton: (terminal) => 
//     `text-sm px-3 py-1 rounded-full cursor-pointer border transition ${
//       terminal
//         ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
//         : "bg-white text-emerald-800 border-emerald-400 hover:shadow-sm"
//     }`,
//   rescheduleEditContainer: "flex flex-col sm:flex-row xl:flex-col md:flex-col md:items-end gap-2 bg-gray-50 p-2 rounded-md shadow-sm",
//   rescheduleDateInput: "text-sm px-3 py-1 w-full sm:w-auto text-green-800 border border-emerald-500 rounded-full",
//   rescheduleTimeInput: "text-sm px-3 py-1 w-full sm:w-auto text-green-800 border border-emerald-500 rounded-full",
//   rescheduleActions: "flex gap-2 w-full sm:w-auto",
//   rescheduleSaveButton: "flex-1 sm:flex-none px-3 py-1 bg-green-500 cursor-pointer text-white border-emerald-500 rounded-full text-sm",
//   rescheduleCancelButton: "flex-1 sm:flex-none px-3 py-1 bg-red-200 border text-sm cursor-pointer border-red-500 rounded-full",
  
//   // Toast component styles
//   toastContainer: "fixed top-4 right-3 sm:right-4 z-50 flex flex-col gap-3",
//   toast: "max-w-xs w-full rounded-lg shadow-lg px-4 py-3 border-l-4 border-emerald-400 bg-white/95 backdrop-blur-sm",
//   toastContent: "flex items-start gap-3",
//   toastSpinner: "h-5 w-5 animate-spin text-emerald-600",
//   toastText: "flex-1",
//   toastTitle: "font-semibold text-sm",
//   toastMessage: "text-xs text-gray-600",
//   toastCloseButton: "text-gray-400 hover:text-gray-700",
  
//   // Animation styles
//   animatedBorderStyle: `
//     .animated-border { position: relative; }
//     .animated-border::before {
//       content: '';
//       position: absolute;
//       inset: -1px;
//       z-index: 0;
//       border-radius: 1rem;
//       padding: 1px;
//       background: linear-gradient(90deg, rgba(16,185,129,0.12), rgba(236,253,245,0.10), rgba(16,185,129,0.12));
//       background-size: 200% 100%;
//       filter: blur(8px);
//       opacity: 0.95;
//       transition: opacity .3s ease;
//       animation: shift 6s linear infinite;
//     }
//     .animated-border .card-inner { position: relative; z-index: 1; }
//     @keyframes shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
//   `,
// };
export const serviceAppointmentsStyles = {
  // ================= PAGE =================
  container:
    "min-h-screen px-4 sm:px-6 py-8 font-serif bg-gradient-to-br from-cyan-50 via-white to-emerald-50", // :contentReference[oaicite:0]{index=0}

  // ================= HEADER =================
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10",

  headerTitleContainer:
    "min-w-0",

  headerTitle:
    "text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent",

  headerSubtitle:
    "text-sm text-slate-500 mt-2",

  // ================= SEARCH =================
  searchContainer:
    "w-full lg:w-[420px] flex flex-col gap-3",

  searchInputWrapper:
    "flex items-center gap-3",

  searchLabel:
    "relative block w-full",

  searchIconContainer:
    "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none",

  searchIcon:
    "w-4 h-4 text-slate-400",

  searchInput:
    "pl-11 pr-10 w-full rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all text-slate-700 placeholder:text-slate-400",

  clearSearchButton:
    "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-slate-100 transition",

  clearSearchIcon:
    "w-4 h-4 text-slate-500",

  statusFilterSelect:
    "text-sm px-4 py-3 cursor-pointer rounded-2xl border border-slate-200 bg-white/90 text-slate-700 focus:ring-2 focus:ring-cyan-300 outline-none",

  searchInfo:
    "mt-2 text-xs text-slate-500 flex items-center justify-between",

  refreshButton:
    "text-xs text-cyan-600 hover:text-cyan-700 hover:underline font-medium",

  // ================= STATES =================
  loadingContainer:
    "col-span-full rounded-[30px] p-10 bg-white/90 border border-white shadow-xl flex items-center justify-center gap-4",

  errorContainer:
    "col-span-full rounded-[30px] p-5 bg-red-50 border border-red-100 text-red-600 shadow-sm",

  noResultsContainer:
    "col-span-full rounded-[30px] p-10 bg-white/90 border border-white shadow-xl flex items-center justify-center flex-col gap-4",

  noResultsIcon:
    "text-4xl text-cyan-300",

  noResultsText:
    "text-sm text-slate-600",

  noResultsSubtext:
    "text-xs text-slate-400",

  // ================= GRID =================
  gridContainer:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 items-stretch",

  // ================= CARD =================
  article:
    "group relative rounded-[32px] p-[1px] bg-gradient-to-r from-cyan-200 via-blue-200 to-emerald-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2",

  cardInner:
    "rounded-[30px] overflow-hidden border border-white bg-white/90 backdrop-blur-xl p-5 h-full flex flex-col justify-between",

  // ================= CARD HEADER =================
  cardHeader:
    "flex flex-col sm:flex-row sm:items-start justify-between gap-4",

  patientInfoContainer:
    "flex items-start gap-4 min-w-0",

  patientAvatar:
    "rounded-2xl w-14 h-14 flex items-center justify-center bg-gradient-to-br from-cyan-100 to-emerald-100 shadow-sm",

  patientAvatarIcon:
    "h-6 w-6 text-cyan-700",

  patientInfo:
    "min-w-0",

  patientName:
    "text-lg font-bold leading-tight text-slate-800 line-clamp-2",

  patientDetails:
    "text-sm text-slate-500 mt-1",

  statusContainer:
    "flex flex-col items-start sm:items-end gap-2 mt-2 sm:mt-0",

  // ================= DETAILS =================
  detailsContainer:
    "mt-5 flex flex-col gap-4 text-slate-700",

  detailItem:
    "flex items-center gap-3 text-sm",

  detailIcon:
    "w-4 h-4 text-cyan-500",

  detailText:
    "font-medium truncate",

  feesText:
    "font-bold text-cyan-600",

  serviceText:
    "mt-2 text-sm text-slate-600",

  serviceName:
    "font-semibold text-cyan-700",

  // ================= ACTIONS =================
  actionsContainer:
    "mt-5 flex items-center justify-between",

  actionsInnerContainer:
    "flex items-center gap-2 w-full flex-wrap",

  cancelButton: (isLocked) =>
    `px-4 py-2 rounded-2xl text-sm font-medium border transition-all duration-300 ${
      isLocked
        ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed"
        : "bg-white text-red-600 border-red-200 hover:bg-red-50 hover:shadow-sm"
    }`,

  // ================= LEGEND =================
  legendContainer:
    "mt-8 p-5 rounded-[28px] bg-white/80 backdrop-blur-xl shadow-inner border border-white text-sm flex flex-wrap items-center gap-5",

  legendItem:
    "flex items-center gap-2",

  legendDot:
    "w-3 h-3 rounded-full",

  // ================= STATUS BADGE =================
  statusBadge: (status) => {
    const map = {
      Pending:
        "bg-yellow-50 text-yellow-700 border border-yellow-200",

      Confirmed:
        "bg-emerald-50 text-emerald-700 border border-emerald-200",

      Canceled:
        "bg-red-50 text-red-700 border border-red-200",

      Completed:
        "bg-cyan-50 text-cyan-700 border border-cyan-200",

      Rescheduled:
        "bg-indigo-50 text-indigo-700 border border-indigo-200"
    };

    const classes =
      map[status] ||
      "bg-slate-50 text-slate-700 border border-slate-200";

    return `inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold ${classes}`;
  },

  // ================= STATUS SELECT =================
  statusSelect: (terminal) =>
    `text-sm cursor-pointer px-4 py-2 rounded-2xl border outline-none transition-all duration-300 ${
      terminal
        ? "bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200"
        : "bg-white text-cyan-700 border-cyan-200 hover:shadow-sm focus:ring-2 focus:ring-cyan-300"
    }`,

  // ================= RESCHEDULE =================
  rescheduleButton: (terminal) =>
    `text-sm px-4 py-2 rounded-2xl cursor-pointer border font-medium transition-all duration-300 ${
      terminal
        ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed"
        : "bg-white text-cyan-700 border-cyan-200 hover:bg-cyan-50 hover:shadow-sm"
    }`,

  rescheduleEditContainer:
    "flex flex-col xl:flex-col gap-3 bg-slate-50 p-3 rounded-2xl shadow-inner",

  rescheduleDateInput:
    "text-sm px-4 py-2 text-slate-700 border border-cyan-200 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-300 bg-white",

  rescheduleTimeInput:
    "text-sm px-4 py-2 text-slate-700 border border-cyan-200 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-300 bg-white",

  rescheduleActions:
    "flex gap-2",

  rescheduleSaveButton:
    "flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300",

  rescheduleCancelButton:
    "flex-1 px-4 py-2 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-sm font-medium hover:bg-red-100 transition-all duration-300",

  // ================= TOAST =================
  toastContainer:
    "fixed top-4 right-3 sm:right-4 z-50 flex flex-col gap-3",

  toast:
    "max-w-xs w-full rounded-[24px] shadow-2xl px-5 py-4 border border-white bg-white/95 backdrop-blur-xl",

  toastContent:
    "flex items-start gap-3",

  toastSpinner:
    "h-5 w-5 animate-spin text-cyan-600",

  toastText:
    "flex-1",

  toastTitle:
    "font-semibold text-sm text-slate-800",

  toastMessage:
    "text-xs text-slate-500 mt-1",

  toastCloseButton:
    "text-slate-400 hover:text-slate-700 transition",

  // ================= CUSTOM CSS =================
  animatedBorderStyle: `
    .animated-border {
      position: relative;
    }

    .animated-border::before {
      content: '';
      position: absolute;
      inset: -1px;
      z-index: 0;
      border-radius: 2rem;
      padding: 1px;
      background: linear-gradient(
        90deg,
        rgba(6,182,212,0.18),
        rgba(59,130,246,0.14),
        rgba(16,185,129,0.18)
      );
      background-size: 200% 100%;
      filter: blur(10px);
      opacity: .95;
      animation: shift 6s linear infinite;
    }

    .animated-border .card-inner {
      position: relative;
      z-index: 1;
    }

    @keyframes shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `
};
// assets/dummyStyles.js

// ... existing styles above ...

// export const serviceDashboardStyles = {
//   // Container styles
//   container: "min-h-screen font-serif p-4 sm:p-6 bg-linear-to-b from-emerald-50 via-emerald-25 to-white",
//   innerContainer: "max-w-7xl mx-auto",
  
//   // Header styles
//   header: {
//     container: "flex flex-col sm:flex-row items-start sm:items-center md:items-center justify-between mb-6 gap-3 md:gap-6 lg:gap-3",
//     title: "text-2xl md:text-3xl font-semibold text-emerald-800",
//     subtitle: "text-sm text-gray-600"
//   },
  
//   // Refresh button styles
//   refresh: {
//     container: "mt-3 sm:mt-0 flex items-center gap-3",
//     countText: "text-xs text-slate-600",
//     button: (hasServicesProp) => 
//       `px-3 py-1 rounded-full text-sm ${
//         hasServicesProp
//           ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//           : "bg-white text-emerald-600 border border-emerald-200 hover:shadow-sm"
//       }`
//   },
  
//   // Stat cards grid
//   statGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6",
  
//   // Search bar styles
//   search: {
//     container: "mb-6 flex justify-start",
//     inputContainer: "flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200 w-full sm:w-64",
//     input: "w-full text-sm outline-none"
//   },
  
//   // Table styles
//   table: {
//     container: "bg-white rounded-2xl shadow-sm overflow-hidden border-b border-transparent",
//     headerMd: "hidden md:grid lg:hidden grid-cols-5 items-center gap-6 px-4 py-3 text-sm text-gray-600 bg-emerald-50",
//     headerLg: "hidden lg:grid md:text-xs lg:text-xs xl:text-md grid-cols-12 items-center gap-4 px-4 py-3 text-sm text-gray-600 bg-emerald-50",
//     headerText: "text-center text-xs font-medium",
//     headerTextLg: (span) => `col-span-${span} text-center text-xs font-medium`,
//     body: "divide-y divide-transparent min-w-full",
//     row: "px-4 py-4 font-serif hover:shadow-md transition bg-white md:bg-transparent",
    
//     // Tablet view
//     tabletView: "hidden md:grid lg:hidden grid-cols-5 items-center gap-6",
//     tabletImage: "w-10 h-10 rounded-lg overflow-hidden bg-gray-200 ring-1 ring-emerald-100",
//     tabletTextContainer: "min-w-0",
//     tabletServiceName: "text-sm font-medium text-emerald-800 whitespace-nowrap",
//     tabletPrice: "text-xs text-gray-500",
//     tabletCell: "text-center text-sm",
    
//     // Desktop view
//     desktopView: "hidden lg:grid grid-cols-12 items-center gap-4",
//     desktopImage: "w-16 h-16 rounded-xl overflow-hidden ring-1 ring-emerald-100 bg-gray-200",
//     desktopServiceName: "font-semibold md:text-xs lg:text-lg xl:text-lg text-emerald-800",
//     desktopCell: (span) => `col-span-${span}`,
//     desktopCenterCell: (span) => `col-span-${span} text-center`,
    
//     // Mobile view
//     mobileView: "md:hidden flex flex-col gap-3",
//     mobileImage: "w-14 h-14 rounded-lg overflow-hidden bg-gray-200 ring-1 ring-emerald-100",
//     mobileServiceHeader: "flex items-center justify-between gap-3",
//     mobileServiceName: "font-semibold text-xs text-emerald-800",
//     mobileStatsContainer: "mt-2 flex flex-wrap gap-2 text-xs text-gray-600",
//     mobileStatItem: (color = "emerald") => 
//       `flex items-center gap-2 bg-${color}-50 px-2 py-1 rounded-full ring-1 ring-${color}-100`
//   },
  
//   // Loading/Error states
//   states: {
//     loading: "px-4 py-6 text-center text-gray-500",
//     error: "px-4 py-6 text-center text-rose-600",
//     empty: "px-4 py-6 text-center text-gray-500"
//   },
  
//   // Show more button
//   showMore: {
//     container: "px-6 py-4 border-t border-green-50 flex justify-center",
//     button: "px-4 py-2 rounded-full cursor-pointer bg-white border border-green-200 shadow-sm hover:bg-green-50 transition"
//   },
  
//   // StatCard component styles
//   statCard: {
//     container: "rounded-full bg-linear-to-br from-emerald-100 to-emerald-50 shadow-sm border border-green-100 p-4 gap-4 flex items-center",
//     iconContainer: "w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700",
//     label: "text-sm text-gray-500",
//     value: "text-lg font-semibold text-slate-800"
//   }
// };

export const serviceDashboardStyles = {
  // ================= CONTAINER =================
  container:
    "min-h-screen font-serif px-4 sm:px-6 py-8 bg-gradient-to-br from-cyan-50 via-white to-emerald-50",

  innerContainer:
    "max-w-7xl mx-auto",

  // ================= HEADER =================
  header: {
    container:
      "flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-10",

    title:
      "text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent",

    subtitle:
      "text-sm text-slate-500 mt-2"
  },

  // ================= REFRESH =================
  refresh: {
    container:
      "mt-3 sm:mt-0 flex items-center gap-3 flex-wrap",

    countText:
      "text-xs text-slate-500",

    button: (hasServicesProp) =>
      `px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ${
        hasServicesProp
          ? "bg-slate-100 text-slate-400 cursor-not-allowed"
          : "bg-white text-cyan-700 border border-cyan-200 shadow-sm hover:shadow-lg hover:bg-cyan-50"
      }`
  },

  // ================= STATS GRID =================
  statGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-8",

  // ================= SEARCH =================
  search: {
    container:
      "mb-8 flex justify-start",

    inputContainer:
      "flex items-center gap-3 bg-white/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-sm border border-slate-200 w-full sm:w-72 focus-within:ring-2 focus-within:ring-cyan-300 transition-all duration-300",

    input:
      "w-full text-sm outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
  },

  // ================= TABLE =================
  table: {
    container:
      "bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-xl overflow-hidden border border-white",

    // HEADER
    headerMd:
      "hidden md:grid lg:hidden grid-cols-5 items-center gap-6 px-5 py-4 text-sm text-slate-500 bg-cyan-50/80 border-b border-cyan-100",

    headerLg:
      "hidden lg:grid grid-cols-12 items-center gap-4 px-5 py-4 text-sm text-slate-500 bg-cyan-50/80 border-b border-cyan-100",

    headerText:
      "text-center text-xs font-semibold uppercase tracking-wide",

    headerTextLg:
      (span) =>
        `col-span-${span} text-center text-xs font-semibold uppercase tracking-wide`,

    // BODY
    body:
      "divide-y divide-slate-100 min-w-full",

    row:
      "px-5 py-5 hover:bg-cyan-50/40 transition-all duration-300",

    // ================= TABLET VIEW =================
    tabletView:
      "hidden md:grid lg:hidden grid-cols-5 items-center gap-6",

    tabletImage:
      "w-12 h-12 rounded-2xl overflow-hidden bg-slate-100 ring-2 ring-cyan-100 shadow-sm",

    tabletTextContainer:
      "min-w-0",

    tabletServiceName:
      "text-sm font-semibold text-slate-800 truncate",

    tabletPrice:
      "text-xs text-cyan-600 font-medium mt-1",

    tabletCell:
      "text-center text-sm text-slate-600",

    // ================= DESKTOP VIEW =================
    desktopView:
      "hidden lg:grid grid-cols-12 items-center gap-4",

    desktopImage:
      "w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-cyan-100 bg-slate-100 shadow-sm",

    desktopServiceName:
      "font-bold text-slate-800 text-lg",

    desktopCell:
      (span) =>
        `col-span-${span}`,

    desktopCenterCell:
      (span) =>
        `col-span-${span} text-center text-slate-700`,

    // ================= MOBILE VIEW =================
    mobileView:
      "md:hidden flex flex-col gap-4",

    mobileImage:
      "w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 ring-2 ring-cyan-100 shadow-sm",

    mobileServiceHeader:
      "flex items-center justify-between gap-4",

    mobileServiceName:
      "font-semibold text-sm text-slate-800",

    mobileStatsContainer:
      "mt-3 flex flex-wrap gap-2 text-xs text-slate-600",

    mobileStatItem:
      (color = "cyan") =>
        `flex items-center gap-2 bg-${color}-50 px-3 py-1.5 rounded-full ring-1 ring-${color}-100`
  },

  // ================= STATES =================
  states: {
    loading:
      "px-6 py-10 text-center text-slate-500",

    error:
      "px-6 py-10 text-center text-red-600",

    empty:
      "px-6 py-10 text-center text-slate-400"
  },

  // ================= SHOW MORE =================
  showMore: {
    container:
      "px-6 py-5 border-t border-slate-100 flex justify-center",

    button:
      "px-5 py-3 rounded-2xl cursor-pointer bg-white border border-cyan-200 text-cyan-700 font-medium shadow-sm hover:shadow-lg hover:bg-cyan-50 transition-all duration-300"
  },

  // ================= STAT CARD =================
  statCard: {
    container:
      "rounded-[28px] bg-white/80 backdrop-blur-xl shadow-lg border border-white p-5 flex items-center gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500",

    iconContainer:
      "w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center text-cyan-700 shadow-sm",

    label:
      "text-sm text-slate-500",

    value:
      "text-2xl font-bold text-slate-800"
  },

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-xl {
      box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
    }

    .shadow-2xl {
      box-shadow: 0 25px 60px rgba(15, 23, 42, 0.14);
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};