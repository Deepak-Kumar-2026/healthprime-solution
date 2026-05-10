// assets/dummyStyles.js

// export const appointmentPageStyles = {
//   // Main container styles
//   pageContainer: "min-h-screen font-serif bg-linear-to-br from-green-50 to-emerald-100 py-10 px-4",
//   maxWidthContainer: "max-w-6xl mx-auto",
  
//   // Title styles
//   doctorTitle: "text-3xl font-bold text-emerald-700 text-center mb-6",
//   serviceTitle: "text-3xl font-bold text-blue-700 text-center mb-6",
  
//   // Loading and empty states
//   loadingText: "text-center text-emerald-600 py-4",
//   serviceLoadingText: "text-center text-blue-600 py-4",
//   emptyStateText: "text-center text-emerald-600 py-4",
//   serviceEmptyStateText: "text-center text-blue-600 py-4",
  
//   // Grid layouts
//   doctorGrid: "grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
//   serviceGrid: "grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-10",
// };
export const appointmentPageStyles = {
  // ================= PAGE LAYOUT =================
  pageContainer:
    "min-h-screen bg-gradient-to-br from-[#f0f9ff] via-[#ecfeff] to-[#fef9ff] py-12 px-5",

  maxWidthContainer:
    "max-w-7xl mx-auto",

  // ================= HEADINGS =================
  doctorTitle:
    "text-4xl md:text-5xl font-extrabold text-center text-slate-800 tracking-tight mb-3",

  serviceTitle:
    "text-4xl md:text-5xl font-extrabold text-center text-slate-800 tracking-tight mb-3",

  subTitle:
    "text-center text-slate-500 text-base md:text-lg mb-10",

  // ================= LOADING & EMPTY =================
  loadingText:
    "text-center text-cyan-600 text-lg font-semibold py-10 animate-pulse",

  serviceLoadingText:
    "text-center text-violet-600 text-lg font-semibold py-10 animate-pulse",

  emptyStateText:
    "text-center text-slate-500 bg-white rounded-3xl py-8 border border-slate-200 shadow-md",

  serviceEmptyStateText:
    "text-center text-slate-500 bg-white rounded-3xl py-8 border border-slate-200 shadow-md",

  // ================= GRID SYSTEM =================
  doctorGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  serviceGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  // ================= CARD STYLES =================
  card:
    "group bg-white/80 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl rounded-[28px] p-5 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative",

  // top gradient line
  topBorder:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= IMAGE =================
  doctorImage:
    "w-full h-64 object-cover rounded-2xl",

  // ================= TEXT =================
  doctorName:
    "text-2xl font-bold text-slate-800 mt-4 group-hover:text-cyan-600 transition duration-300",

  specialization:
    "text-cyan-600 font-semibold mt-1",

  experience:
    "text-slate-500 text-sm mt-1",

  // ================= STATUS BADGES =================
  confirmedBadge:
    "inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700 border border-green-200",

  completedBadge:
    "inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 border border-blue-200",

  canceledBadge:
    "inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700 border border-red-200",

  rescheduledBadge:
    "inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 border border-yellow-200",

  // ================= BUTTONS =================
  primaryButton:
    "w-full mt-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-300/40 transition-all duration-300",

  secondaryButton:
    "w-full mt-3 border border-slate-300 hover:bg-slate-100 text-slate-700 py-3 rounded-2xl font-medium transition-all duration-300",

  dangerButton:
    "w-full mt-3 border border-red-200 hover:bg-red-50 text-red-600 py-3 rounded-2xl font-medium transition-all duration-300",

  // ================= INFO ROW =================
  infoRow:
    "flex items-center gap-3 text-slate-600 mt-2 text-sm",

  // ================= RESCHEDULE BOX =================
  rescheduleBox:
    "bg-yellow-50 border border-yellow-200 rounded-2xl p-3 mt-4 text-yellow-700",

  // ================= SECTION SPACING =================
  sectionSpacing:
    "mb-20",
};

export const cardStyles = {
  // Doctor appointment card
  doctorCard: "bg-white border border-emerald-200 rounded-2xl p-6 shadow-md hover:shadow-emerald-400 transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center",
  serviceCard: "bg-white border border-blue-200 rounded-2xl p-6 shadow-md",
  
  // Image containers
  doctorImageContainer: "w-28 h-28 rounded-full border-4 border-emerald-300 shadow-md bg-emerald-50 flex items-center justify-center overflow-hidden",
  serviceImageContainer: "w-28 h-28 rounded-full border-4 border-blue-300 mx-auto bg-blue-50 flex items-center justify-center overflow-hidden",
  
  // Images
  image: "w-full h-full object-cover",
  
  // Text styles
  doctorName: "text-xl md:text-sm xl:text-md whitespace-nowrap lg:text-lg font-semibold mt-4 text-center",
  serviceName: "text-xl md:text-sm lg:text-md xl:text-lg font-semibold text-center mt-4",
  specialization: "text-sm text-emerald-700 mt-1",
  price: "text-center text-green-700 font-semibold text-lg mt-2",
  
  // Date and time containers
  dateContainer: "mt-4 rounded-full border bg-emerald-50 border-emerald-200 py-1 px-3 w-full flex justify-center gap-2",
  serviceDateContainer: "mt-4 rounded-full border bg-blue-50 border-blue-200 py-1 px-3 flex justify-center gap-2 text-sm",
  timeContainer: "mt-2 rounded-full border bg-emerald-50 border-emerald-200 py-1 px-3 w-full flex justify-center gap-2",
  serviceTimeContainer: "mt-2 rounded-full border bg-blue-50 border-blue-200 py-1 px-3 flex justify-center gap-2 text-sm",
  
  // Badges container
  badgesContainer: "mt-4 flex justify-center gap-2",
  
  // Rescheduled text
  rescheduledText: "mt-3 text-center xl:text-md text-sm text-blue-700",
  serviceRescheduledText: "mt-3 text-center xl:text-md xl:whitespace-nowrap text-sm text-blue-700",
  rescheduledSpan: "font-semibold xl:line-clamp-2",
};


// export const badgeStyles = {
//   paymentBadge: {
//     online: "px-3 py-1 rounded-full font-semibold text-xs bg-green-100 text-green-700 border border-green-300 flex items-center gap-1",
//     cash: "px-3 py-1 rounded-full font-semibold text-xs bg-yellow-100 text-yellow-700 border border-yellow-300 flex items-center gap-1"
//   },
  
//   statusBadge: {
//     completed: "px-3 py-1 rounded-full font-semibold text-xs bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1",
//     confirmed: "px-3 py-1 rounded-full font-semibold text-xs bg-green-100 text-green-700 border border-green-200 flex items-center gap-1",
//     pending: "px-3 py-1 rounded-full font-semibold text-xs bg-yellow-100 text-yellow-700 border border-yellow-200 flex items-center gap-1",
//     canceled: "px-3 py-1 rounded-full font-semibold text-xs bg-red-100 text-red-700 border border-red-200 flex items-center gap-1",
//     default: "px-3 py-1 rounded-full font-semibold text-xs bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-1"
//   }
// };

// Icon size helper

// export const badgeStyles = {
//   /* ================= PAYMENT ================= */
//   paymentBadge: {
//     online: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-teal-50 text-teal-700
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-teal-100 hover:shadow-md hover:-translate-y-[2px]
//       hover:ring-1 hover:ring-teal-300
//       animate-badgeFade
//     `,

//     cash: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-amber-50 text-amber-700
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-amber-100 hover:shadow-md hover:-translate-y-[2px]
//       hover:ring-1 hover:ring-amber-300
//       animate-badgeFade
//     `
//   },

//   /* ================= STATUS ================= */
//   statusBadge: {
//     completed: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-slate-100 text-slate-600
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-slate-200 hover:shadow-md hover:-translate-y-[1px]
//       animate-badgeFade
//     `,

//     confirmed: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-teal-50 text-teal-700
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-teal-100 hover:shadow-md hover:-translate-y-[2px]
//       hover:ring-1 hover:ring-teal-300
//       animate-badgeFade
//     `,

//     pending: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-amber-50 text-amber-700
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-amber-100 hover:shadow-md hover:-translate-y-[2px]
//       hover:ring-1 hover:ring-amber-300
//       animate-badgeFade animate-pulse
//     `,

//     canceled: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-red-50 text-red-600
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-red-100 hover:shadow-md hover:-translate-y-[2px]
//       hover:ring-1 hover:ring-red-300
//       animate-badgeFade
//     `,

//     default: `
//       px-3 py-1 rounded-full text-xs font-medium
//       bg-gray-100 text-gray-600
//       flex items-center gap-1
//       shadow-sm
//       transition-all duration-300 ease-in-out
//       hover:bg-gray-200 hover:shadow-md hover:-translate-y-[1px]
//       animate-badgeFade
//     `
//   }
// };

export const badgeStyles = {
  /* ================= PAYMENT BADGES ================= */
  paymentBadge: {
    online: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-cyan-50 to-blue-50
      text-cyan-700
      border border-cyan-200
      flex items-center gap-2
      shadow-sm
      backdrop-blur-md
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105
      hover:border-cyan-300
      hover:from-cyan-100 hover:to-blue-100
    `,

    cash: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-orange-50 to-amber-50
      text-orange-700
      border border-orange-200
      flex items-center gap-2
      shadow-sm
      backdrop-blur-md
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105
      hover:border-orange-300
      hover:from-orange-100 hover:to-amber-100
    `
  },

  /* ================= STATUS BADGES ================= */
  statusBadge: {
    completed: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-slate-100 to-gray-100
      text-slate-700
      border border-slate-200
      flex items-center gap-2
      shadow-sm
      transition-all duration-300 ease-in-out
      hover:shadow-md hover:scale-105
      hover:bg-slate-200
    `,

    confirmed: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-emerald-50 to-green-50
      text-emerald-700
      border border-emerald-200
      flex items-center gap-2
      shadow-sm
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105
      hover:border-emerald-300
      hover:from-emerald-100 hover:to-green-100
    `,

    pending: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-yellow-50 to-amber-50
      text-yellow-700
      border border-yellow-200
      flex items-center gap-2
      shadow-sm
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105
      hover:border-yellow-300
      hover:from-yellow-100 hover:to-amber-100
      animate-pulse
    `,

    canceled: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-red-50 to-rose-50
      text-red-700
      border border-red-200
      flex items-center gap-2
      shadow-sm
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105
      hover:border-red-300
      hover:from-red-100 hover:to-rose-100
    `,

    rescheduled: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-violet-50 to-purple-50
      text-violet-700
      border border-violet-200
      flex items-center gap-2
      shadow-sm
      transition-all duration-300 ease-in-out
      hover:shadow-lg hover:scale-105
      hover:border-violet-300
      hover:from-violet-100 hover:to-purple-100
    `,

    default: `
      px-4 py-1.5 rounded-full
      text-xs font-semibold tracking-wide
      bg-gradient-to-r from-gray-100 to-slate-100
      text-gray-700
      border border-gray-200
      flex items-center gap-2
      shadow-sm
      transition-all duration-300 ease-in-out
      hover:shadow-md hover:scale-105
      hover:bg-gray-200
    `
  }
};

export const iconSize = {
  small: "w-3",
  medium: "w-4"
};

// assets/dummyStyles.js

// export const bannerStyles = {
//   // Banner container styles
//   bannerContainer: "relative w-full max-w-7xl mx-auto my-12 px-4",
  
//   // Main container with animated border
//   mainContainer: "relative rounded-3xl shadow-2xl overflow-hidden group",
  
//   // Border outline styles
//   borderOutline: "absolute inset-0 rounded-3xl p-[3px] pointer-events-none",
//   outerAnimatedBand: "absolute inset-0 rounded-3xl bg-linear-to-r from-green-400 via-emerald-500 to-green-400 animate-[spin_3s_linear_infinite] opacity-80",
//   innerWhiteBorder: "absolute inset-0.5 rounded-3xl bg-white",
  
//   // Content container
//   contentContainer: "relative z-20 p-6 sm:p-8 md:p-10 lg:p-12",
  
//   // Layout styles
//   flexContainer: "flex flex-col lg:flex-row items-center justify-between gap-8",
//   leftContent: "flex-1 text-center lg:text-left",
//   rightImageSection: "flex-1 relative w-full",
  
//   // Header with badge
//   headerBadgeContainer: "flex flex-col lg:flex-row items-center justify-center lg:justify-start mb-4 lg:mb-6 gap-4",
//   stethoscopeContainer: "relative",
//   stethoscopeInner: "relative bg-linear-to-br from-green-300 to-emerald-600 p-3 rounded-full shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300",
//   stethoscopeIcon: "w-7 h-7 text-white",
  
//   // Title styles
//   titleContainer: "font-[pacifico]",
//   title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-1",
//   titleGradient: "text-transparent bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text",
  
//   // Stars
//   starsContainer: "flex items-center justify-center lg:justify-start mt-1",
//   starsInner: "flex gap-1",
//   starIcon: "w-4 h-4 fill-yellow-400 text-yellow-400",
  
//   // Tagline
//   tagline: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700 mb-5 leading-tight",
//   taglineHighlight: "text-green-600 font-semibold",
  
//   // Features grid
//   featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm sm:text-base",
//   featureItem: "flex items-center justify-center lg:justify-start bg-linear-to-br from-green-500 to-green-200 backdrop-blur-sm p-3 rounded-full shadow-sm border",
//   featureIcon: "w-5 h-5 text-white mr-3",
//   featureText: "text-gray-700 font-medium",
  
//   // Feature border colors
//   featureBorderGreen: "border-green-100",
//   featureBorderBlue: "border-blue-100",
//   featureBorderEmerald: "border-emerald-100",
//   featureBorderPurple: "border-purple-100",
  
//   // CTA Buttons container
//   ctaButtonsContainer: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start",
  
//   // Book appointment button
//   bookButton: "group relative lg:whitespace-nowrap bg-linear-to-r from-green-500 to-emerald-300 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transform transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden text-sm sm:text-base",
//   bookButtonOverlay: "absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000",
//   bookButtonContent: "relative flex items-center justify-center gap-2",
//   bookButtonIcon: "w-4 h-4 sm:w-5 sm:h-5",
  
//   // Emergency call button
//   emergencyButton: "group border-2 lg:whitespace-nowrap border-red-400 text-red-600 bg-red-300 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transform transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:bg-red-400/80 text-sm sm:text-base",
//   emergencyButtonContent: "flex items-center justify-center gap-2",
//   emergencyButtonIcon: "w-4 h-4 sm:w-5 sm:h-5",
  
//   // Image section
//   imageContainer: "relative w-full max-w-md mx-auto",
//   imageFrame: "relative transform transition-transform duration-500 overflow-hidden rounded-xl",
//   image: "w-full object-cover h-56 sm:h-72 md:h-96 lg:h-[360px] xl:h-[420px] transition-transform duration-700"
// };


export const bannerStyles = {
  // ================= MAIN WRAPPER =================
  bannerContainer:
    "relative w-full max-w-7xl mx-auto my-16 px-4",

  // ================= MAIN CARD =================
  mainContainer:
    "relative overflow-hidden rounded-[40px] bg-gradient-to-br from-cyan-50 via-white to-violet-50 border border-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.08)]",

  // ================= TOP GLOW BORDER =================
  borderOutline:
    "absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none",

  outerAnimatedBand:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  innerWhiteBorder:
    "absolute inset-[1px] rounded-[40px]",

  // ================= CONTENT =================
  contentContainer:
    "relative z-20 p-6 sm:p-8 md:p-12 lg:p-14",

  // ================= FLEX LAYOUT =================
  flexContainer:
    "flex flex-col lg:flex-row items-center justify-between gap-12",

  leftContent:
    "flex-1 text-center lg:text-left",

  rightImageSection:
    "flex-1 relative flex justify-center",

  // ================= HEADER BADGE =================
  headerBadgeContainer:
    "flex items-center justify-center lg:justify-start gap-4 mb-6",

  stethoscopeContainer:
    "relative",

  stethoscopeInner:
    "bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-xl rotate-[-8deg] hover:rotate-0 transition duration-500",

  stethoscopeIcon:
    "w-7 h-7 text-white",

  // ================= TITLE =================
  titleContainer:
    "space-y-2",

  title:
    "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight",

  titleGradient:
    "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-transparent bg-clip-text",

  // ================= STARS =================
  starsContainer:
    "flex justify-center lg:justify-start mt-2",

  starsInner:
    "flex gap-1 bg-yellow-50 border border-yellow-100 px-3 py-1 rounded-full shadow-sm",

  starIcon:
    "w-4 h-4 fill-yellow-400 text-yellow-400",

  // ================= TAGLINE =================
  tagline:
    "text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mt-5 max-w-2xl",

  taglineHighlight:
    "text-cyan-600 font-semibold",

  // ================= FEATURES =================
  featuresGrid:
    "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8",

  featureItem:
    "group flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-4 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",

  featureIcon:
    "w-5 h-5 text-cyan-600 group-hover:scale-110 transition duration-300",

  featureText:
    "text-slate-700 font-medium",

  // ================= FEATURE BORDERS =================
  featureBorderGreen:
    "hover:border-cyan-200",

  featureBorderBlue:
    "hover:border-blue-200",

  featureBorderEmerald:
    "hover:border-emerald-200",

  featureBorderPurple:
    "hover:border-violet-200",

  // ================= CTA BUTTONS =================
  ctaButtonsContainer:
    "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6",

  // ================= PRIMARY BUTTON =================
  bookButton:
    "group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  bookButtonOverlay:
    "absolute inset-0 bg-white/20 translate-x-[-120%] skew-x-12 group-hover:translate-x-[120%] transition duration-1000",

  bookButtonContent:
    "relative flex items-center justify-center gap-2",

  bookButtonIcon:
    "w-5 h-5",

  // ================= SECONDARY BUTTON =================
  emergencyButton:
    "group border border-red-200 bg-red-50 text-red-600 px-8 py-4 rounded-2xl font-semibold hover:bg-red-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  emergencyButtonContent:
    "flex items-center justify-center gap-2",

  emergencyButtonIcon:
    "w-5 h-5",

  // ================= IMAGE SECTION =================
  imageContainer:
    "relative w-full max-w-lg",

  imageFrame:
    "relative overflow-hidden rounded-[32px] shadow-2xl border border-white bg-white p-2 hover:scale-[1.02] transition duration-500",

  image:
    "w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover rounded-[24px] hover:scale-105 transition duration-700",
};



// export const commonStyles = {
//   // Common utility styles can be added here for reuse across components
//   textCenter: "text-center",
//   textLeft: "text-left",
//   flexCol: "flex flex-col",
//   flexRow: "flex flex-row",
//   itemsCenter: "items-center",
//   justifyCenter: "justify-center",
//   justifyStart: "justify-start",
//   gap4: "gap-4",
//   mb4: "mb-4",
//   mb6: "mb-6"
// };


// dummyStyles.js - Centralized CSS styles for all components


export const commonStyles = {
  // ================= FLEX =================
  flexCol:
    "flex flex-col",

  flexRow:
    "flex flex-row",

  flexCenter:
    "flex items-center justify-center",

  flexBetween:
    "flex items-center justify-between",

  itemsCenter:
    "items-center",

  justifyCenter:
    "justify-center",

  justifyStart:
    "justify-start",

  justifyBetween:
    "justify-between",

  // ================= TEXT =================
  textCenter:
    "text-center",

  textLeft:
    "text-left",

  headingPrimary:
    "text-3xl md:text-4xl font-bold tracking-tight text-slate-800",

  headingSecondary:
    "text-2xl font-semibold text-slate-700",

  paragraph:
    "text-slate-600 leading-relaxed",

  mutedText:
    "text-slate-500 text-sm",

  gradientText:
    "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-transparent bg-clip-text font-bold",

  // ================= SPACING =================
  gap2:
    "gap-2",

  gap3:
    "gap-3",

  gap4:
    "gap-4",

  gap6:
    "gap-6",

  mb2:
    "mb-2",

  mb4:
    "mb-4",

  mb6:
    "mb-6",

  mb10:
    "mb-10",

  mt2:
    "mt-2",

  mt4:
    "mt-4",

  mt6:
    "mt-6",

  p4:
    "p-4",

  p6:
    "p-6",

  px4:
    "px-4",

  py2:
    "py-2",

  // ================= CARD =================
  glassCard:
    "bg-white/80 backdrop-blur-xl border border-white shadow-lg rounded-3xl",

  hoverCard:
    "transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",

  // ================= BUTTONS =================
  primaryButton:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300",

  secondaryButton:
    "border border-slate-300 bg-white text-slate-700 px-6 py-3 rounded-2xl font-medium hover:bg-slate-100 transition-all duration-300",

  dangerButton:
    "border border-red-200 bg-red-50 text-red-600 px-6 py-3 rounded-2xl font-medium hover:bg-red-100 transition-all duration-300",

  // ================= BADGES =================
  successBadge:
    "px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold border border-green-200",

  warningBadge:
    "px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold border border-yellow-200",

  errorBadge:
    "px-4 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold border border-red-200",

  infoBadge:
    "px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold border border-blue-200",

  // ================= IMAGE =================
  imageRounded:
    "rounded-2xl object-cover",

  imageCircle:
    "rounded-full object-cover",

  // ================= SHADOWS =================
  softShadow:
    "shadow-md",

  mediumShadow:
    "shadow-xl",

  largeShadow:
    "shadow-2xl",

  // ================= TRANSITIONS =================
  smoothTransition:
    "transition-all duration-300 ease-in-out",

  hoverScale:
    "hover:scale-105",

  hoverLift:
    "hover:-translate-y-1",

  // ================= BORDERS =================
  borderLight:
    "border border-slate-200",

  borderPrimary:
    "border border-cyan-200",

  roundedXL:
    "rounded-2xl",

  rounded2XL:
    "rounded-3xl",
};
// export const certificationStyles = {
//   // Container styles
//   container: "relative py-6 bg-linear-to-brfrom-emerald-50 via-green-50 to-teal-50 overflow-hidden",
  
//   // Background styles
//   backgroundGrid: "absolute inset-0",
//   topLine: "absolute top-0 left-0 w-full h-1 bg-linear-to-br from-transparent via-green-400 to-transparent opacity-60",
//   gridContainer: "absolute inset-0 opacity-[0.02]",
//   grid: "grid grid-cols-12 gap-4 w-full h-full",
//   gridCell: "border border-green-300 rounded",
  
//   // Content wrapper
//   contentWrapper: "relative max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
  
//   // Heading styles
//   headingContainer: "text-center mb-12",
//   headingInner: "relative inline-block",
//   leftLine: "absolute -left-20 top-1/2 w-16 h-0.5 bg-linear-to-br from-transparent to-green-400",
//   rightLine: "absolute -right-20 top-1/2 w-16 h-0.5 bg-linear-to-br from-transparent to-teal-400",
//   title: "text-3xl lg:text-6xl font-serif text-gray-900 mb-4 tracking-tight",
//   titleText: "bg-linear-to-br from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent",
//   subtitle: "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light tracking-wide",
//   badgeContainer: "inline-flex items-center px-5 py-2.5 bg-green-500/10 border border-green-400/30 rounded-full mt-6 backdrop-blur-sm",
//   badgeDot: "w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse mr-3",
//   badgeText: "text-green-700 font-semibold tracking-wide text-sm",
  
//   // Logos container
//   logosContainer: "relative mb-10",
//   logosInner: "relative p-4 mx-auto max-w-9xl",
//   logosFlexContainer: "flex overflow-hidden",
//   logosMarquee: "flex animate-marquee-single whitespace-nowrap py-3",
//   logoItem: "inline-flex flex-col items-center mx-10 transform transition-all duration-500 group",
//   logoImage: "w-16 h-16 object-contain filter transition-all duration-500",
//   logoText: "mt-3 font-serif italic text-sm font-semibold text-gray-700 text-center max-w-[120px] leading-tight group-hover:text-green-700 transition-colors duration-300",
  
//   // Animation keyframes and class (to be added via style tag)
//   animationStyles: `
//     @keyframes marquee-single {
//       0% {
//         transform: translateX(0);
//       }
//       100% {
//         transform: translateX(-33.333%);
//       }
//     }
//     .animate-marquee-single {
//       animation: marquee-single 60s linear infinite;
//     }
//   `
// };

// Add to existing dummyStyles.js


export const certificationStyles = {
  // ================= MAIN CONTAINER =================
  container:
    "relative py-20 bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  // ================= BACKGROUND =================
  backgroundGrid:
    "absolute inset-0",

  topLine:
    "absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-80",

  gridContainer:
    "absolute inset-0 opacity-[0.03]",

  grid:
    "grid grid-cols-12 gap-4 w-full h-full",

  gridCell:
    "border border-cyan-200 rounded-xl",

  // ================= CONTENT WRAPPER =================
  contentWrapper:
    "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  // ================= HEADING =================
  headingContainer:
    "text-center mb-16",

  headingInner:
    "relative inline-block",

  leftLine:
    "absolute -left-20 top-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent to-cyan-400 hidden lg:block",

  rightLine:
    "absolute -right-20 top-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent to-violet-400 hidden lg:block",

  title:
    "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 mb-5",

  titleText:
    "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  subtitle:
    "text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light",

  // ================= BADGE =================
  badgeContainer:
    "inline-flex items-center px-5 py-2.5 bg-white border border-cyan-100 rounded-full mt-7 shadow-md backdrop-blur-xl",

  badgeDot:
    "w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse mr-3",

  badgeText:
    "text-cyan-700 font-semibold tracking-wide text-sm",

  // ================= LOGOS SECTION =================
  logosContainer:
    "relative",

  logosInner:
    "relative bg-white/70 backdrop-blur-xl border border-white shadow-xl rounded-[32px] p-6 md:p-8 overflow-hidden",

  logosFlexContainer:
    "flex overflow-hidden relative",

  logosMarquee:
    "flex animate-marquee-single whitespace-nowrap py-4",

  // ================= LOGO ITEM =================
  logoItem:
    "inline-flex flex-col items-center justify-center mx-10 group transition-all duration-500 hover:-translate-y-2",

  logoImage:
    "w-20 h-20 object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-md",

  logoText:
    "mt-4 text-sm font-semibold text-slate-700 text-center max-w-[130px] leading-snug group-hover:text-cyan-600 transition-colors duration-300",

  // ================= GLOW EFFECT =================
  logoGlow:
    "absolute inset-0 bg-gradient-to-r from-cyan-100/20 via-blue-100/10 to-violet-100/20 pointer-events-none",

  // ================= ANIMATION =================
  animationStyles: `
    @keyframes marquee-single {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }

    .animate-marquee-single {
      animation: marquee-single 45s linear infinite;
    }

    .animate-marquee-single:hover {
      animation-play-state: paused;
    }
  `
};
// export const contactPageStyles = {
//   // Page container
//   pageContainer: "min-h-screen bg-linear-to-br from-emerald-100 via-white to-emerald-50 py-12 px-4 sm:px-6 md:px-8 lg:px-20 font-serif relative overflow-hidden",
  
//   // Background accents
//   bgAccent1: "hidden md:block absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-18 animate-pulse",
//   bgAccent2: "hidden lg:block absolute bottom-0 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-10 animate-spin-slow",
  
//   // Grid and layout
//   gridContainer: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start",
  
//   // Form container
//   formContainer: "relative bg-white/60 backdrop-blur-sm shadow-2xl rounded-3xl border border-emerald-200 p-6 sm:p-8 md:p-10 transition-all",
  
//   // Text styles
//   formTitle: "text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-2",
//   formSubtitle: "text-sm sm:text-md text-emerald-700 mb-6 italic",
  
//   // Form layout
//   formGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
//   formSpace: "space-y-5",
  
//   // Labels
//   label: "text-emerald-800 text-sm font-semibold flex items-center gap-2",
  
//   // Inputs
//   input: "w-full px-4 py-2 mt-1 border border-emerald-300 bg-emerald-50/40 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow text-sm sm:text-base",
//   textarea: "w-full px-4 py-2 mt-1 border border-emerald-300 bg-emerald-50/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-shadow text-sm sm:text-base",
  
//   // Error messages
//   error: "text-xs text-rose-500 mt-1",
  
//   // Button container
//   buttonContainer: "flex flex-col md:flex-row items-center gap-3",
//   button: "w-full md:w-auto flex items-center gap-2 justify-center bg-emerald-600 text-white px-5 py-2 rounded-full shadow-lg transition-transform active:scale-95",
//   sentMessage: "text-emerald-700 italic text-sm animate-pulse",
  
//   // Info container
//   infoContainer: "space-y-6",
//   infoCard: "bg-white/70 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-xl border border-emerald-100",
//   infoTitle: "text-xl sm:text-2xl font-bold mb-2",
//   infoText: "text-sm sm:text-md",
//   infoItem: "mt-3 flex items-center gap-2 text-sm sm:text-md",
  
//   // Map
//   map: "w-full h-56 sm:h-64 md:h-72 lg:h-72 rounded-3xl shadow-2xl border-2 border-emerald-200 hover:shadow-emerald-400 transition-all duration-500",
  
//   // Hours container
//   hoursContainer: "bg-linear-to-br from-emerald-200 to-emerald-100 rounded-2xl p-4 shadow-inner border border-emerald-300",
//   hoursTitle: "text-lg sm:text-xl font-semibold mb-1",
//   hoursText: "text-gray-700 text-sm sm:text-md",
  
//   // Animation keyframes
//   animationKeyframes: `
//     .animate-spin-slow {
//       animation: spin 15s linear infinite;
//     }
//     @keyframes spin {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//   `
// };


// Add to existing dummyStyles.js file


export const contactPageStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50 py-16 px-4 sm:px-6 lg:px-20 relative overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  bgAccent1:
    "hidden lg:block absolute top-10 left-0 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  bgAccent2:
    "hidden lg:block absolute bottom-0 right-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-20 animate-float",

  // ================= GRID LAYOUT =================
  gridContainer:
    "relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start z-10",

  // ================= FORM CONTAINER =================
  formContainer:
    "bg-white/80 backdrop-blur-2xl border border-white shadow-2xl rounded-[32px] p-6 sm:p-8 lg:p-10 hover:shadow-cyan-100 transition-all duration-500",

  // ================= TITLES =================
  formTitle:
    "text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3",

  formSubtitle:
    "text-slate-500 text-base leading-relaxed mb-8 max-w-lg",

  // ================= FORM LAYOUT =================
  formGrid:
    "grid grid-cols-1 sm:grid-cols-2 gap-5",

  formSpace:
    "space-y-6",

  // ================= LABELS =================
  label:
    "text-slate-700 text-sm font-semibold flex items-center gap-2 mb-2",

  // ================= INPUTS =================
  input:
    "w-full px-5 py-3 border border-slate-200 bg-slate-50 rounded-2xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 shadow-sm hover:border-cyan-200",

  textarea:
    "w-full px-5 py-4 border border-slate-200 bg-slate-50 rounded-2xl text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 shadow-sm hover:border-cyan-200 resize-none",

  // ================= ERRORS =================
  error:
    "text-sm text-red-500 mt-2 font-medium",

  // ================= BUTTON =================
  buttonContainer:
    "flex flex-col sm:flex-row items-center gap-4 pt-2",

  button:
    "group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  buttonOverlay:
    "absolute inset-0 bg-white/20 translate-x-[-120%] skew-x-12 group-hover:translate-x-[120%] transition duration-1000",

  sentMessage:
    "text-cyan-600 text-sm font-medium animate-pulse",

  // ================= INFO SECTION =================
  infoContainer:
    "space-y-6",

  infoCard:
    "bg-white/80 backdrop-blur-2xl rounded-[32px] p-6 shadow-xl border border-white hover:shadow-violet-100 transition-all duration-500",

  infoTitle:
    "text-2xl font-bold text-slate-800 mb-3",

  infoText:
    "text-slate-600 leading-relaxed text-base",

  infoItem:
    "mt-4 flex items-center gap-3 text-slate-700 font-medium",

  // ================= MAP =================
  map:
    "w-full h-72 rounded-[28px] shadow-2xl border border-slate-200 hover:scale-[1.01] transition-all duration-500",

  // ================= HOURS =================
  hoursContainer:
    "bg-gradient-to-r from-cyan-50 to-blue-50 rounded-[28px] p-5 border border-cyan-100 shadow-inner",

  hoursTitle:
    "text-xl font-bold text-slate-800 mb-2",

  hoursText:
    "text-slate-600 leading-relaxed",

  // ================= ANIMATIONS =================
  animationKeyframes: `
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
  `
};
// export const doctorsPageStyles = {
//   // Main container
//   mainContainer: "min-h-screen bg-linear-to-br from-emerald-50 to-teal-100 py-8 sm:py-10 px-3 sm:px-6 relative overflow-hidden",
  
//   // Background shapes
//   backgroundShape1: "absolute -top-40 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse",
//   backgroundShape2: "absolute -bottom-40 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse animation-delay-2000",
  
//   // Wrapper
//   wrapper: "max-w-7xl mx-auto relative z-10 font-serif",
  
//   // Header
//   headerContainer: "text-center mb-8 sm:mb-10 animate-fade-in",
//   headerTitle: "text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-3 tracking-tight",
//   headerSubtitle: "text-sm sm:text-base text-emerald-700 font-light",
  
//   // Search bar
//   searchContainer: "flex justify-center mb-8 sm:mb-12 animate-slide-up",
//   searchWrapper: "relative w-full max-w-xl transition-all duration-500 px-2 sm:px-0",
//   searchInput: "w-full py-3 sm:py-4 pl-12 pr-10 text-sm sm:text-lg rounded-full border border-emerald-300 bg-white/90 text-emerald-800 placeholder-emerald-400 shadow-md sm:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:shadow-xl transition-all duration-300 hover:shadow-2xl",
//   searchIcon: "absolute left-4 top-3 sm:top-4 text-emerald-600 w-5 h-5 sm:w-6 sm:h-6",
//   clearButton: "absolute right-3 top-3 sm:top-4 text-emerald-600 hover:text-emerald-800 transition",
  
//   // Error area
//   errorContainer: "text-center mb-6",
//   errorText: "text-sm text-rose-600 mb-2",
//   retryButton: "px-4 py-2 rounded-full bg-emerald-600 text-white",
  
//   // Loading skeleton
//   skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8",
//   skeletonCard: "animate-pulse bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300",
//   skeletonImage: "relative mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-36 lg:h-36 bg-emerald-100 rounded-full",
//   skeletonName: "h-5 bg-emerald-100 rounded w-3/4 mx-auto mb-2",
//   skeletonSpecialization: "h-4 bg-emerald-100 rounded w-1/2 mx-auto mb-3",
//   skeletonButton: "h-8 bg-emerald-100 rounded w-full mx-auto mt-4",
  
//   // Doctors grid
//   doctorsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8 transition-all duration-300",
  
//   // Doctor card
//   doctorCard: "bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-5 md:p-6 text-center transition-all duration-300 hover:shadow-xl animate-fade-in-up",
//   doctorCardUnavailable: "opacity-80",
  
//   // Doctor image container
//   imageContainer: "relative mx-auto mb-4 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-36 lg:h-36",
//   imageContainerUnavailable: "opacity-70 cursor-not-allowed",
//   doctorImage: "w-full h-full rounded-full object-cover border-4 border-emerald-200 shadow-lg transform transition-transform duration-300 group-hover:scale-105",
//   doctorImageUnavailable: "border-4 border-gray-300 shadow-md",
  
//   // Doctor info
//   doctorName: "text-base sm:text-lg md:text-md whitespace-nowrap lg:text-lg font-bold text-emerald-900 mb-1",
//   doctorSpecialization: "text-sm sm:text-sm md:text-sm text-emerald-600 font-medium mb-3",
  
//   // Experience badge
//   experienceBadge: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 bg-emerald-50 border border-emerald-300 shadow-sm",
//   experienceIcon: "w-4 h-4",
  
//   // Book button (available)
//   bookButton: "w-full inline-flex items-center justify-center gap-2 py-2 rounded-full font-medium transition-all duration-300 text-sm bg-linear-to-r from-emerald-300 to-teal-500 text-white hover:shadow-lg",
//   bookButtonIcon: "w-5 h-5",
  
//   // Not available button
//   notAvailableButton: "w-full inline-flex items-center justify-center gap-2 py-2 rounded-full font-medium bg-gray-300 text-gray-600 cursor-not-allowed text-sm",
//   notAvailableIcon: "w-5 h-5",
  
//   // No results
//   noResults: "col-span-full text-center py-10 text-emerald-800 font-medium text-base animate-fade-in",
  
//   // Show more button
//   showMoreContainer: "flex justify-center mt-8 sm:mt-10",
//   showMoreButton: "flex items-center cursor-pointer gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-400 to-teal-500 text-white rounded-full text-md font-semibold shadow-md hover:shadow-lg transition-all duration-300",
//   showMoreIcon: "w-5 h-5",
  
//   // Link focus styles
//   focusRing: "focus:outline-none focus:ring-2 focus:ring-emerald-300 rounded-full",
  
//   // Animation styles
//   animationFadeIn: "animate-fade-in",
//   animationFadeInUp: "animate-fade-in-up",
//   animationSlideUp: "animate-slide-up"
// };



// // Footer styles
// export const footerStyles = {
//   // Main container
//   footerContainer: "relative font-serif bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 border-t border-emerald-200 overflow-hidden",
  
//   // Floating icons
//   floatingIcon1: "absolute top-5 right-5 animate-float hidden md:block",
//   floatingIcon2: "absolute top-1/3 left-5 animate-float hidden md:block",
//   stethoscopeIcon: "w-8 h-8 text-emerald-600",
//   activityIcon: "w-5 h-5 text-green-500",
  
//   // Main content
//   mainContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10",
//   gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 mb-10 text-center lg:text-left",
  
//   // Company info
//   companySection: "lg:col-span-1 flex flex-col items-center lg:items-start",
//   logoContainer: "flex items-center space-x-5 mb-6 transform transition-transform duration-500",
//   logoWrapper: "relative",
//   logoImageContainer: "relative w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 p-1 transform transition-transform duration-500",
//   logoImage: "w-full h-full object-contain",
//   companyName: "text-2xl md:text-3xl lg:text-3xl font-bold bg-linear-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent font-['Poppins'] tracking-tight",
//   companyTagline: "text-emerald-600 font-serif text-xs md:text-sm font-semibold tracking-wide mt-1",
//   companyDescription: "text-emerald-700 font-serif italic mb-5 leading-relaxed text-sm md:text-base font-light",
  
//   // Contact info
//   contactContainer: "space-y-3 w-full md:w-auto",
//   contactItem: "flex items-center justify-center md:justify-start space-x-4 text-emerald-700 hover:text-emerald-800 transition-all duration-300 group transform hover:translate-x-0 md:hover:translate-x-2",
//   contactIconWrapper: "w-9 h-9 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-300 shadow-sm",
//   contactIcon: "w-4 h-4 text-emerald-600",
//   contactText: "text-sm font-medium",
  
//   // Links sections
//   linksSection: "lg:col-span-1",
//   sectionTitle: "text-lg md:text-xl font-bold text-emerald-800 mb-6 relative inline-block",
//   linksList: "space-y-2",
//   linkItem: "w-full",
  
//   // Quick Links
//   quickLink: "flex items-center justify-center md:justify-start text-emerald-700 hover:text-emerald-800 transition-all duration-300 group text-sm md:text-base font-medium py-2 px-3 rounded-lg hover:bg-emerald-50 border border-transparent hover:border-emerald-200",
//   quickLinkIconWrapper: "w-7 h-7 bg-emerald-100 rounded-full flex items-center justify-center mr-3",
//   quickLinkIcon: "w-3 h-3 text-emerald-600",
  
//   // Services
//   serviceLink: "flex items-center justify-center md:justify-start text-emerald-700 hover:text-green-700 transition-all duration-300 group text-sm md:text-base font-medium py-2 px-3 rounded-lg hover:bg-green-50 border border-transparent hover:border-green-200",
//   serviceIcon: "w-3 h-3 bg-green-500 rounded-full mr-3",
  
//   // Newsletter & Social
//   newsletterSection: "lg:col-span-1 flex flex-col items-center lg:items-start",
//   newsletterTitle: "text-lg md:text-xl font-bold text-emerald-800 mb-4",
//   newsletterDescription: "text-emerald-700 text-sm md:text-base mb-4 font-light text-center lg:text-left",
//   newsletterForm: "w-full max-w-md",
  
//   // Mobile newsletter
//   mobileNewsletterContainer: "flex flex-col gap-3 lg:hidden",
//   emailInput: "w-full px-4 py-3 text-base text-emerald-800 bg-white border-2 border-emerald-200 rounded-full focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:border-emerald-400 transition-all duration-300 shadow-sm placeholder-emerald-400",
//   mobileSubscribeButton: "w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-linear-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
//   mobileButtonIcon: "w-4 h-4",
  
//   // Desktop newsletter
//   desktopNewsletterContainer: "relative hidden lg:block",
//   desktopEmailInput: "w-full px-6 py-4 text-base text-emerald-800 bg-white border-2 border-emerald-200 rounded-full focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:border-emerald-400 transition-all duration-300 transform shadow-lg placeholder-emerald-400",
//   desktopSubscribeButton: "absolute right-2 xl:px-2 top-2 bg-linear-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full cursor-pointer transition-all duration-300 transform flex items-center shadow-lg hover:shadow-xl",
//   desktopButtonIcon: "w-4 h-4 mr-2",
//   desktopButtonText: "font-semibold",
  
//   // Social links
//   socialContainer: "flex gap-3 justify-center lg:justify-start mt-6",
//   socialLink: "relative group",
//   socialIconBackground: "absolute inset-0 bg-linear-to-r from-emerald-400 to-green-500 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300 hidden lg:block",
//   socialIcon: "w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 p-2 text-emerald-700 cursor-pointer transform hover:scale-110 hover:rotate-6 transition-all duration-300 relative z-10 bg-white rounded-2xl shadow-lg border-2 border-emerald-100",
  
//   // Social icon colors
//   facebookColor: "hover:text-blue-600",
//   twitterColor: "hover:text-blue-400",
//   instagramColor: "hover:text-pink-600",
//   linkedinColor: "hover:text-blue-700",
//   youtubeColor: "hover:text-red-600",
  
//   // Bottom section
//   bottomSection: "flex flex-col md:flex-row justify-center lg:justify-between items-center gap-4 md:gap-6 border-t border-emerald-100 pt-6",
//   copyright: "text-emerald-700 text-sm md:text-base font-medium flex items-center gap-2",
//   designerText: "text-emerald-700 text-sm md:text-base font-medium flex items-center gap-2",
//   designerLink: "font-bold text-emerald-500 hover:text-purple-700 transition-colors duration-300",
  
//   // Animation keyframes for floating icons (to be added via style tag)
//   animationStyles: `
//     @keyframes float {
//       0%, 100% {
//         transform: translateY(0);
//       }
//       50% {
//         transform: translateY(-10px);
//       }
//     }
//     .animate-float {
//       animation: float 3s ease-in-out infinite;
//     }
//   `
// };

export const doctorsPageStyles = {
  // ================= PAGE CONTAINER =================
  mainContainer:
    "min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50 py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundShape1:
    "absolute -top-40 -right-32 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundShape2:
    "absolute -bottom-40 -left-32 w-80 h-80 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= WRAPPER =================
  wrapper:
    "max-w-7xl mx-auto relative z-10",

  // ================= HEADER =================
  headerContainer:
    "text-center mb-12 animate-fade-in",

  headerTitle:
    "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerSubtitle:
    "text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed",

  // ================= SEARCH BAR =================
  searchContainer:
    "flex justify-center mb-12 animate-slide-up",

  searchWrapper:
    "relative w-full max-w-2xl",

  searchInput:
    "w-full py-4 pl-14 pr-12 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:shadow-xl",

  searchIcon:
    "absolute left-5 top-1/2 -translate-y-1/2 text-cyan-600 w-5 h-5",

  clearButton:
    "absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-600 transition duration-300",

  // ================= ERROR =================
  errorContainer:
    "text-center mb-8",

  errorText:
    "text-red-500 font-medium mb-3",

  retryButton:
    "px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300",

  // ================= SKELETON =================
  skeletonGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  skeletonCard:
    "animate-pulse bg-white/80 backdrop-blur-xl border border-white rounded-[30px] p-6 shadow-lg",

  skeletonImage:
    "w-32 h-32 rounded-full bg-slate-200 mx-auto mb-5",

  skeletonName:
    "h-5 bg-slate-200 rounded-full w-3/4 mx-auto mb-3",

  skeletonSpecialization:
    "h-4 bg-slate-200 rounded-full w-1/2 mx-auto mb-4",

  skeletonButton:
    "h-10 bg-slate-200 rounded-2xl w-full mt-5",

  // ================= DOCTORS GRID =================
  doctorsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  // ================= CARD =================
  doctorCard:
    "group relative bg-white/80 backdrop-blur-xl border border-white rounded-[32px] p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden",

  doctorCardUnavailable:
    "opacity-70 grayscale-[0.1]",

  // ================= TOP GRADIENT BAR =================
  topGradient:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= IMAGE =================
  imageContainer:
    "relative mx-auto mb-5 w-32 h-32",

  imageContainerUnavailable:
    "opacity-70",

  doctorImage:
    "w-full h-full rounded-full object-cover border-[5px] border-cyan-100 shadow-xl transition-all duration-500 group-hover:scale-105",

  doctorImageUnavailable:
    "border-gray-200",

  // ================= INFO =================
  doctorName:
    "text-xl font-bold text-slate-800 mb-2 tracking-tight group-hover:text-cyan-600 transition duration-300",

  doctorSpecialization:
    "text-cyan-600 font-medium text-sm mb-4",

  // ================= EXPERIENCE BADGE =================
  experienceBadge:
    "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold shadow-sm mb-5",

  experienceIcon:
    "w-4 h-4",

  // ================= AVAILABLE BUTTON =================
  bookButton:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  bookButtonIcon:
    "w-5 h-5",

  // ================= UNAVAILABLE BUTTON =================
  notAvailableButton:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-200 text-slate-500 font-medium cursor-not-allowed",

  notAvailableIcon:
    "w-5 h-5",

  // ================= NO RESULTS =================
  noResults:
    "col-span-full text-center py-14 text-slate-600 font-medium text-lg animate-fade-in",

  // ================= SHOW MORE =================
  showMoreContainer:
    "flex justify-center mt-12",

  showMoreButton:
    "group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  showMoreIcon:
    "w-5 h-5 group-hover:translate-y-1 transition duration-300",

  // ================= FOCUS =================
  focusRing:
    "focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-2xl",

  // ================= ANIMATIONS =================
  animationFadeIn:
    "animate-fade-in",

  animationFadeInUp:
    "animate-fade-in-up",

  animationSlideUp:
    "animate-slide-up",
};
// export const footerStyles = {
//   /* ================= MAIN CONTAINER ================= */
//   footerContainer: `
//     relative font-serif
//     bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900
//     text-white overflow-hidden
//   `,

//   /* ================= GLOW BACKGROUND ================= */
//   floatingIcon1: "absolute top-10 right-10 animate-float opacity-30",
//   floatingIcon2: "absolute bottom-10 left-10 animate-float opacity-30",
//   stethoscopeIcon: "w-10 h-10 text-emerald-300",
//   activityIcon: "w-6 h-6 text-teal-300",

//   /* ================= MAIN CONTENT ================= */
//   mainContent: `
//     max-w-7xl mx-auto px-6 py-16 relative z-10
//   `,

//   gridContainer: `
//     grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10
//     text-center lg:text-left
//   `,

//   /* ================= COMPANY ================= */
//   companySection: "flex flex-col items-center lg:items-start",

//   logoContainer: "flex items-center gap-4 mb-6",
//   logoWrapper: "",
//   logoImageContainer: "w-16 h-16",
//   logoImage: "w-full h-full object-contain",

//   companyName: `
//     text-2xl font-bold 
//     bg-gradient-to-r from-teal-300 to-emerald-400 
//     bg-clip-text text-transparent
//   `,
//   companyTagline: "text-sm text-gray-300",
//   companyDescription: "text-gray-400 text-sm leading-relaxed",

//   /* ================= CONTACT ================= */
//   contactContainer: "space-y-3 mt-4",

//   contactItem: `
//     flex items-center gap-3 text-gray-300
//     hover:text-white transition-all duration-300
//     hover:translate-x-1
//   `,

//   contactIconWrapper: `
//     w-9 h-9 rounded-full 
//     bg-white/10 flex items-center justify-center
//   `,
//   contactIcon: "w-4 h-4 text-teal-300",
//   contactText: "text-sm",

//   /* ================= LINKS ================= */
//   linksSection: "",

//   sectionTitle: `
//     text-lg font-semibold mb-4
//     text-white relative inline-block
//     after:absolute after:left-0 after:-bottom-1 
//     after:w-10 after:h-[2px] after:bg-teal-400
//   `,

//   linksList: "space-y-2",
//   linkItem: "",

//   quickLink: `
//     text-gray-300 hover:text-teal-300
//     transition-all duration-300 text-sm
//     hover:translate-x-1 block
//   `,

//   quickLinkIconWrapper: "hidden",
//   quickLinkIcon: "",

//   serviceLink: `
//     text-gray-300 hover:text-emerald-300
//     transition-all duration-300 text-sm
//     hover:translate-x-1 block
//   `,
//   serviceIcon: "hidden",

//   /* ================= NEWSLETTER ================= */
//   newsletterSection: "flex flex-col items-center lg:items-start",

//   newsletterTitle: "text-lg font-semibold text-white",
//   newsletterDescription: "text-gray-400 text-sm",

//   newsletterForm: "w-full mt-4",

//   mobileNewsletterContainer: "flex flex-col gap-3",

//   emailInput: `
//     w-full px-4 py-3 rounded-full
//     bg-white/10 border border-white/20
//     text-white placeholder-gray-400
//     focus:outline-none focus:ring-2 focus:ring-teal-400
//   `,

//   mobileSubscribeButton: `
//     w-full py-3 rounded-full
//     bg-gradient-to-r from-teal-400 to-emerald-500
//     text-white font-semibold
//     hover:shadow-lg hover:scale-105
//     transition-all duration-300
//   `,
//   mobileButtonIcon: "w-4 h-4",

//   desktopNewsletterContainer: "hidden",
//   desktopEmailInput: "",
//   desktopSubscribeButton: "",
//   desktopButtonIcon: "",
//   desktopButtonText: "",

//   /* ================= SOCIAL ================= */
//   socialContainer: "flex gap-3 mt-6 justify-center lg:justify-start",

//   socialLink: "group",

//   socialIconBackground: "hidden",

//   socialIcon: `
//     w-10 h-10 p-2 rounded-full
//     bg-white/10 text-white
//     hover:bg-gradient-to-r from-teal-400 to-emerald-500
//     hover:scale-110
//     transition-all duration-300
//   `,

//   facebookColor: "",
//   twitterColor: "",
//   instagramColor: "",
//   linkedinColor: "",
//   youtubeColor: "",

//   /* ================= BOTTOM ================= */
//   bottomSection: `
//     border-t border-white/10 mt-10 pt-6
//     flex flex-col md:flex-row justify-between items-center gap-4
//   `,

//   copyright: "text-gray-400 text-sm",
//   designerText: "text-gray-400 text-sm",

//   designerLink: `
//     text-teal-300 font-semibold
//     hover:text-emerald-400 transition
//   `,

//   /* ================= ANIMATIONS ================= */
//   animationStyles: `
//     @keyframes float {
//       0%,100% { transform: translateY(0); }
//       50% { transform: translateY(-12px); }
//     }

//     .animate-float {
//       animation: float 4s ease-in-out infinite;
//     }
//   `,
// };
// Add to existing dummyStyles.js

export const footerStyles = {
  /* ================= MAIN CONTAINER ================= */
  footerContainer: `
    relative overflow-hidden
    bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950
    text-white
  `,

  /* ================= BACKGROUND GLOW ================= */
  floatingIcon1:
    "absolute top-10 right-10 opacity-20 animate-float hidden lg:block",

  floatingIcon2:
    "absolute bottom-10 left-10 opacity-20 animate-float hidden lg:block",

  stethoscopeIcon:
    "w-12 h-12 text-cyan-300",

  activityIcon:
    "w-8 h-8 text-violet-300",

  /* ================= MAIN CONTENT ================= */
  mainContent:
    "relative z-10 max-w-7xl mx-auto px-6 py-20",

  gridContainer:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",

  /* ================= COMPANY ================= */
  companySection:
    "flex flex-col",

  logoContainer:
    "flex items-center gap-4 mb-6",

  logoWrapper:
    "relative",

  logoImageContainer:
    "w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-2 shadow-lg",

  logoImage:
    "w-full h-full object-contain",

  companyName:
    "text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent",

  companyTagline:
    "text-slate-300 text-sm mt-1",

  companyDescription:
    "text-slate-400 text-sm leading-relaxed mt-4 max-w-sm",

  /* ================= CONTACT ================= */
  contactContainer:
    "space-y-4 mt-6",

  contactItem:
    "group flex items-center gap-4 text-slate-300 hover:text-white transition-all duration-300",

  contactIconWrapper:
    "w-11 h-11 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition duration-300",

  contactIcon:
    "w-5 h-5 text-cyan-300",

  contactText:
    "text-sm font-medium",

  /* ================= LINKS ================= */
  linksSection:
    "flex flex-col",

  sectionTitle:
    "text-xl font-bold mb-6 text-white relative inline-block after:absolute after:left-0 after:-bottom-2 after:w-12 after:h-[3px] after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500",

  linksList:
    "space-y-3",

  linkItem:
    "overflow-hidden",

  quickLink:
    "text-slate-400 hover:text-cyan-300 text-sm transition-all duration-300 hover:translate-x-2 inline-block",

  quickLinkIconWrapper:
    "hidden",

  quickLinkIcon:
    "",

  serviceLink:
    "text-slate-400 hover:text-violet-300 text-sm transition-all duration-300 hover:translate-x-2 inline-block",

  serviceIcon:
    "hidden",

  /* ================= NEWSLETTER ================= */
  newsletterSection:
    "flex flex-col",

  newsletterTitle:
    "text-xl font-bold text-white mb-2",

  newsletterDescription:
    "text-slate-400 text-sm leading-relaxed",

  newsletterForm:
    "w-full mt-6",

  mobileNewsletterContainer:
    "flex flex-col gap-4",

  emailInput:
    "w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  mobileSubscribeButton:
    "group flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300",

  mobileButtonIcon:
    "w-5 h-5 group-hover:rotate-12 transition duration-300",

  desktopNewsletterContainer:
    "hidden",

  desktopEmailInput:
    "",

  desktopSubscribeButton:
    "",

  desktopButtonIcon:
    "",

  desktopButtonText:
    "",

  /* ================= SOCIAL ================= */
  socialContainer:
    "flex gap-4 mt-8",

  socialLink:
    "group",

  socialIconBackground:
    "hidden",

  socialIcon:
    "w-11 h-11 p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:scale-110 transition-all duration-300 shadow-lg",

  facebookColor: "",
  twitterColor: "",
  instagramColor: "",
  linkedinColor: "",
  youtubeColor: "",

  /* ================= BOTTOM SECTION ================= */
  bottomSection:
    "border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4",

  copyright:
    "text-slate-500 text-sm text-center md:text-left",

  designerText:
    "text-slate-500 text-sm text-center md:text-right",

  designerLink:
    "text-cyan-300 font-semibold hover:text-violet-300 transition duration-300",

  /* ================= ANIMATION ================= */
  animationStyles: `
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-14px);
      }
    }

    .animate-float {
      animation: float 5s ease-in-out infinite;
    }
  `,
};
// export const homeDoctorsStyles = {
//   // Section container
//   section: "py-10 bg-linear-to-br from-green-50 to-blue-50",
//   container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
//   // Header
//   header: "text-center mb-10",
//   title: "text-4xl md:text-5xl font-serif italic text-gray-900",
//   titleSpan: "text-emerald-600 font-semibold",
//   subtitle: "mt-2 text-gray-600 max-w-2xl mx-auto",
  
//   // Error/Retry
//   errorContainer: "text-center mb-6",
//   errorText: "text-sm text-rose-600 mb-2",
//   retryButton: "px-4 py-2 rounded-full bg-emerald-600 text-white",
  
//   // Loading skeleton
//   skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8",
//   skeletonCard: "animate-pulse bg-white rounded-3xl shadow-md p-4 h-72",
//   skeletonImage: "bg-emerald-100 rounded-lg h-40 mb-4",
//   skeletonText1: "h-5 bg-emerald-100 rounded w-3/4 mb-2",
//   skeletonText2: "h-4 bg-emerald-100 rounded w-1/2 mb-3",
//   skeletonButton: "h-8 w-full bg-emerald-100 rounded",
  
//   // Doctors grid
//   doctorsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8",
  
//   // Doctor card
//   article: "group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition transform duration-300 overflow-hidden",
  
//   // Image containers
//   imageContainerAvailable: "relative h-60 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-t-3xl",
//   imageContainerUnavailable: "relative h-60 sm:h-44 md:h-48 lg:h-52 overflow-hidden rounded-t-3xl opacity-80 cursor-not-allowed",
//   image: "w-full h-full object-cover object-center transform transition-transform duration-500",
//   unavailableBadge: "absolute top-3 left-3 bg-rose-50 text-rose-700 text-xs px-2 py-1 rounded-full shadow",
  
//   // Card body
//   cardBody: "p-3 sm:p-4 md:p-5 font-serif",
//   doctorName: "text-base sm:text-lg md:text-sm lg:text-md xl:text-xl font-semibold text-black",
//   specialization: "text-sm sm:text-sm md:text-sm text-emerald-600 font-medium mt-1",
  
//   // Experience badge
//   experienceContainer: "mt-3 flex items-center justify-between text-sm text-gray-600",
//   experienceBadge: "flex items-center gap-2 border border-green-300 bg-green-100 px-2 py-1 rounded-full text-xs sm:text-sm",
  
//   // Buttons
//   buttonContainer: "mt-3",
//   buttonAvailable: "w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm bg-linear-to-br from-emerald-300 to-teal-500 text-white hover:shadow-lg",
//   buttonUnavailable: "w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-full font-medium bg-gray-300 text-gray-600 cursor-not-allowed text-sm",
  
//   // Custom CSS
//   customCSS: `
//     /* keep your shadow look consistent */
//     .shadow-md { box-shadow: 0 6px 18px rgba(14, 30, 37, 0.06); }
//     .shadow-2xl { box-shadow: 0 18px 50px rgba(14, 30, 37, 0.12); }

//     /* optional: slightly reduce spacing on very small devices for compactness */
//     @media (max-width: 420px) {
//       .max-w-7xl { padding-left: 12px; padding-right: 12px; }
//     }
//   `
// };

// Add to existing dummyStyles.js file

export const homeDoctorsStyles = {
  // ================= SECTION =================
  section:
    "py-20 bg-gradient-to-br from-cyan-50 via-white to-violet-50 relative overflow-hidden",

  container:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  // ================= HEADER =================
  header:
    "text-center mb-14",

  title:
    "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight",

  titleSpan:
    "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  subtitle:
    "mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed",

  // ================= ERROR =================
  errorContainer:
    "text-center mb-8",

  errorText:
    "text-red-500 font-medium mb-3",

  retryButton:
    "px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300",

  // ================= LOADING =================
  skeletonGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  skeletonCard:
    "animate-pulse bg-white/80 backdrop-blur-xl border border-white rounded-[30px] shadow-lg overflow-hidden p-4",

  skeletonImage:
    "bg-slate-200 rounded-[24px] h-56 mb-5",

  skeletonText1:
    "h-5 bg-slate-200 rounded-full w-3/4 mb-3",

  skeletonText2:
    "h-4 bg-slate-200 rounded-full w-1/2 mb-4",

  skeletonButton:
    "h-10 w-full bg-slate-200 rounded-2xl mt-5",

  // ================= GRID =================
  doctorsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  // ================= CARD =================
  article:
    "group relative bg-white/80 backdrop-blur-xl border border-white rounded-[32px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden",

  // top gradient line
  topGradient:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= IMAGE =================
  imageContainerAvailable:
    "relative h-64 overflow-hidden",

  imageContainerUnavailable:
    "relative h-64 overflow-hidden opacity-70 cursor-not-allowed",

  image:
    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",

  unavailableBadge:
    "absolute top-4 left-4 bg-red-50 text-red-600 border border-red-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm",

  // ================= CARD BODY =================
  cardBody:
    "p-5",

  doctorName:
    "text-xl font-bold text-slate-800 tracking-tight group-hover:text-cyan-600 transition duration-300",

  specialization:
    "text-cyan-600 font-medium text-sm mt-2",

  // ================= EXPERIENCE =================
  experienceContainer:
    "mt-5 flex items-center justify-between",

  experienceBadge:
    "flex items-center gap-2 bg-cyan-50 border border-cyan-100 px-4 py-2 rounded-full text-cyan-700 text-sm font-semibold shadow-sm",

  // ================= BUTTONS =================
  buttonContainer:
    "mt-6",

  buttonAvailable:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  buttonUnavailable:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-200 text-slate-500 font-medium cursor-not-allowed",

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-lg {
      box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
    }

    .shadow-2xl {
      box-shadow: 0 25px 60px rgba(15, 23, 42, 0.15);
    }

    @media (max-width: 420px) {
      .max-w-7xl {
        padding-left: 14px;
        padding-right: 14px;
      }
    }
  `
};

// export const loginPageStyles = {
//   // Main container
//   mainContainer: "min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 via-emerald-100 to-green-200 relative font-serif overflow-hidden",
  
//   // Back button
//   backButton: "absolute top-6 left-6 cursor-pointer flex items-center gap-2 text-green-800 font-semibold hover:text-green-600 transition-all duration-300",
//   backButtonIcon: "w-5 h-5",
  
//   // Login card
//   loginCard: "relative z-10 bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-[90%] max-w-md border border-green-200 transition-all duration-500 hover:shadow-green-300/50",
  
//   // Logo
//   logoContainer: "flex justify-center mb-6",
//   logo: "w-28 h-28 object-contain drop-shadow-lg",
  
//   // Header
//   title: "text-3xl font-bold text-center text-emerald-700 tracking-wide mb-2",
//   subtitle: "text-center text-green-600 mb-6 text-sm",
  
//   // Form
//   form: "space-y-5",
  
//   // Input fields
//   input: "w-full px-5 py-3 rounded-full border border-green-300 bg-white/80",
  
//   // Submit button
//   submitButton: "w-full py-3 bg-linear-to-r from-emerald-400 to-green-600 text-white font-semibold rounded-full",
  
//   // Toast styles (kept in component since they're inline)
//   // These remain in the component as they're JS objects, not CSS classes
  
//   // Responsive adjustments
//   responsiveCard: "p-8 w-[90%] max-w-md"
// };

// Add to dummyStyles.js if you want to extract toast styles too

export const loginPageStyles = {
  // ================= MAIN CONTAINER =================
  mainContainer:
    "min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-violet-50 relative overflow-hidden px-4",

  // ================= BACKGROUND EFFECTS =================
  backgroundShape1:
    "absolute top-[-120px] left-[-100px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundShape2:
    "absolute bottom-[-120px] right-[-100px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= BACK BUTTON =================
  backButton:
    "absolute top-6 left-6 z-20 flex items-center gap-2 text-slate-700 font-semibold hover:text-cyan-600 transition-all duration-300 group",

  backButtonIcon:
    "w-5 h-5 group-hover:-translate-x-1 transition duration-300",

  // ================= LOGIN CARD =================
  loginCard:
    "relative z-10 w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-[36px] p-8 md:p-10 transition-all duration-500 hover:shadow-cyan-100",

  // top gradient border
  topGradient:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 rounded-t-[36px]",

  // ================= LOGO =================
  logoContainer:
    "flex justify-center mb-7",

  logoWrapper:
    "w-28 h-28 rounded-[28px] bg-white shadow-xl border border-slate-100 flex items-center justify-center p-4 hover:scale-105 transition-all duration-500",

  logo:
    "w-full h-full object-contain scale-110 drop-shadow-md",

  // ================= HEADER =================
  title:
    "text-4xl font-extrabold text-center tracking-tight text-slate-800 mb-3",

  titleGradient:
    "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  subtitle:
    "text-center text-slate-500 text-sm md:text-base mb-8 leading-relaxed",

  // ================= FORM =================
  form:
    "space-y-6",

  // ================= INPUT FIELDS =================
  inputWrapper:
    "relative",

  input:
    "w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/80 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 shadow-sm hover:border-cyan-200",

  inputIcon:
    "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5",

  // ================= SUBMIT BUTTON =================
  submitButton:
    "group relative overflow-hidden w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  buttonOverlay:
    "absolute inset-0 bg-white/20 translate-x-[-120%] skew-x-12 group-hover:translate-x-[120%] transition duration-1000",

  buttonContent:
    "relative flex items-center justify-center gap-2",

  // ================= EXTRA LINKS =================
  extraLinks:
    "flex justify-between items-center mt-4 text-sm",

  forgotPassword:
    "text-slate-500 hover:text-cyan-600 transition duration-300",

  registerLink:
    "text-cyan-600 font-medium hover:text-blue-600 transition duration-300",

  // ================= RESPONSIVE =================
  responsiveCard:
    "w-full max-w-md p-8 md:p-10",

  // ================= CUSTOM ANIMATIONS =================
  customCSS: `
    @media (max-width: 480px) {
      .login-card {
        padding: 24px;
      }
    }
  `
};

// export const toastStyles = {
//   errorToast: {
//     borderRadius: "12px",
//     background: "#fff",
//     color: "#14532d",
//     border: "1px solid #86efac",
//     boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
//   },
//   successToast: {
//     borderRadius: "12px",
//     background: "#ecfdf5",
//     color: "#065f46",
//     border: "1px solid #6ee7b7",
//     boxShadow: "0 4px 15px rgba(16,185,129,0.3)",
//     fontWeight: "600",
//   }
// };



// Navbar styles

export const toastStyles = {
  // ================= ERROR TOAST =================
  errorToast: {
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,242,242,0.95))",
    color: "#dc2626",
    border: "1px solid rgba(252,165,165,0.5)",
    boxShadow:
      "0 10px 35px rgba(239,68,68,0.18)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    padding: "14px 18px",
    fontWeight: "600",
    letterSpacing: "0.2px",
  },

  // ================= SUCCESS TOAST =================
  successToast: {
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(236,253,245,0.95))",
    color: "#0f766e",
    border: "1px solid rgba(103,232,249,0.35)",
    boxShadow:
      "0 10px 35px rgba(6,182,212,0.18)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    padding: "14px 18px",
    fontWeight: "700",
    letterSpacing: "0.3px",
  },

  // ================= WARNING TOAST =================
  warningToast: {
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,249,195,0.95))",
    color: "#a16207",
    border: "1px solid rgba(253,224,71,0.4)",
    boxShadow:
      "0 10px 35px rgba(234,179,8,0.18)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    padding: "14px 18px",
    fontWeight: "600",
  },

  // ================= INFO TOAST =================
  infoToast: {
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(239,246,255,0.95))",
    color: "#2563eb",
    border: "1px solid rgba(147,197,253,0.4)",
    boxShadow:
      "0 10px 35px rgba(59,130,246,0.18)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    padding: "14px 18px",
    fontWeight: "600",
  },
};
// export const navbarStyles = {
//   // Main container
//   navbarContainer: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 transition-transform duration-500",
//   navbarHidden: "-translate-y-full",
//   navbarVisible: "translate-y-0",
  
//   // Border animation
//   navbarBorder: "navbar-border",
  
//   // Content wrapper
//   contentWrapper: "max-w-7xl font-[pacifico] md:px-2 mx-auto px-4 sm:px-6 lg:px-8",
//   flexContainer: "flex items-center justify-between h-20",
  
//   // Logo section
//   logoLink: "flex items-center gap-3 -ml-3 sm:-ml-4",
//   logoContainer: "relative group w-20 h-20 sm:w-24 sm:h-24 lg:w-15 lg:h-15 xl:w-32 xl:h-32",
//   logoImageWrapper: "relative flex items-center justify-center overflow-hidden p-2 mx-1 h-full w-full",
//   logoImage: "w-14 h-14 sm:w-18 sm:h-18 lg:w-15 lg:h-15 xl:w-24 xl:h-24 md:w-20 md:h-20 object-contain",
//   logoTextContainer: "block sm:block",
//   logoTitle: "text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-green-600 tracking-tight",
//   logoSubtitle: "text-xs lg:text-xs text-gray-500",
  
//   // Desktop navigation
//   desktopNav: "hidden lg:-mx-5 lg:flex items-center gap-2",
//   navItemsContainer: "flex gap-1 bg-white border border-emerald-200 p-1 rounded-full shadow-lg",
//   navItem: "nav-item px-5 md:px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
//   navItemActive: "active",
//   navItemInactive: "text-gray-700 hover:text-emerald-600",
  
//   // Right side
//   rightContainer: "flex items-center gap-3",
  
//   // Signed out buttons
//   doctorAdminButton: "btn-add hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-transform duration-200",
//   doctorAdminIcon: "w-4 h-4",
//   doctorAdminText: "hidden lg:text-xs lg:whitespace-nowrap sm:inline-block",
//   loginButton: "btn-login hidden lg:flex lg:text-sm items-center gap-2 bg-linear-to-r from-emerald-400 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 cursor-default",
//   loginIcon: "w-4 h-4",
  
//   // Mobile toggle
//   mobileToggle: "lg:hidden p-2.5 rounded-lg hover:bg-emerald-50 transition-colors",
//   toggleIcon: "w-6 h-6 text-gray-900",
  
//   // Mobile menu
//   mobileMenu: "mobile-menu lg:hidden pb-4 space-y-2 border-t border-emerald-100 pt-4",
//   mobileMenuItem: "block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300",
//   mobileMenuItemActive: "bg-emerald-500 text-white",
//   mobileMenuItemInactive: "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600",
  
//   // Mobile signed out buttons
//   mobileDoctorAdminButton: "w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-emerald-200 bg-white text-sm font-semibold hover:bg-emerald-50 transition-all",
//   mobileLoginContainer: "w-full mt-3",
//   mobileLoginButton: "w-full cursor-default md:rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-emerald-500 to-green-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all",
  
//   // Animation styles (to be added via style tag)
//   animationStyles: `
//     @keyframes borderFlow {
//       0% {
//         background-position: 0% 50%;
//       }
//       50% {
//         background-position: 100% 50%;
//       }
//       100% {
//         background-position: 0% 50%;
//       }
//     }
//     .navbar-border {
//       height: 2px;
//       background: linear-gradient(90deg, #10b981, #34d399, #059669, #10b981);
//       background-size: 300% 100%;
//       animation: borderFlow 6s ease infinite;
//     }
//     .nav-item {
//       animation: slideIn 0.45s ease-out forwards;
//       position: relative;
//     }
//     .nav-item.active {
//       background: white !important;
//       color: #059669 !important;
//       box-shadow: 0 6px 18px rgba(5, 150, 105, 0.12);
//     }
//     .nav-item.active::after {
//       content: "";
//       position: absolute;
//       bottom: -8px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 6px;
//       height: 6px;
//       background: #10b981;
//       border-radius: 9999px;
//       animation: pulse 2s infinite;
//     }
//     @keyframes pulse {
//       0%,
//       100% {
//         opacity: 1;
//         transform: translateX(-50%) scale(1);
//       }
//       50% {
//         opacity: 0.5;
//         transform: translateX(-50%) scale(1.25);
//       }
//     }
//     @keyframes slideIn {
//       from {
//         opacity: 0;
//         transform: translateY(-10px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }
    
//     /* Add button styles */
//     .btn-add {
//       background-image: linear-gradient(white, white), linear-gradient(90deg, #10b981, #34d399, #059669);
//       background-origin: padding-box, border-box;
//       background-clip: padding-box, border-box;
//       border: 2px solid transparent;
//       border-radius: 9999px;
//       box-shadow: 0 2px 8px rgba(16,185,129,0.06);
//       transform: translateZ(0);
//     }
//     .btn-add:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 8px 24px rgba(16,185,129,0.12);
//     }
//     .btn-login {
//       animation: glow 2.2s ease-in-out infinite;
//     }
//     @keyframes glow {
//       0%,
//       100% {
//         box-shadow: 0 0 20px rgba(16, 185, 129, 0.22),
//           0 4px 12px rgba(16, 185, 129, 0.12);
//       }
//       50% {
//         box-shadow: 0 0 32px rgba(16, 185, 129, 0.36),
//           0 6px 22px rgba(16, 185, 129, 0.18);
//       }
//     }
//     @keyframes fadeIn {
//       from {
//         opacity: 0;
//         height: 0;
//       }
//       to {
//         opacity: 1;
//         height: auto;
//       }
//     }
//     .mobile-menu {
//       animation: fadeIn 0.28s ease-out;
//     }
//   `
// };

// Add to existing dummyStyles.js

export const navbarStyles = {
  // ================= MAIN CONTAINER =================
  navbarContainer:
    "sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white shadow-sm transition-all duration-500",

  navbarHidden:
    "-translate-y-full",

  navbarVisible:
    "translate-y-0",

  // ================= TOP BORDER =================
  navbarBorder:
    "navbar-border",

  // ================= WRAPPER =================
  contentWrapper:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  flexContainer:
    "flex items-center justify-between h-20",

  // ================= LOGO =================
  logoLink:
    "flex items-center gap-3 group",

  logoContainer:
    "relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center",

  logoImageWrapper:
    "relative w-full h-full flex items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 group-hover:scale-105 transition-all duration-500 overflow-hidden",

  logoImage:
    "w-14 h-14 md:w-16 md:h-16 object-contain scale-110 drop-shadow-md",

  logoTextContainer:
    "hidden sm:block",

  logoTitle:
    "text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  logoSubtitle:
    "text-xs text-slate-500 mt-1 font-medium tracking-wide",

  // ================= DESKTOP NAV =================
  desktopNav:
    "hidden lg:flex items-center gap-3",

  navItemsContainer:
    "flex items-center gap-2 bg-white/90 border border-slate-200 backdrop-blur-xl p-1.5 rounded-full shadow-lg",

  navItem:
    "nav-item relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",

  navItemActive:
    "active",

  navItemInactive:
    "text-slate-600 hover:text-cyan-600",

  // ================= RIGHT SIDE =================
  rightContainer:
    "flex items-center gap-4",

  // ================= ADMIN BUTTON =================
  doctorAdminButton:
    "btn-add hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 transition-all duration-300",

  doctorAdminIcon:
    "w-4 h-4",

  doctorAdminText:
    "text-sm whitespace-nowrap",

  // ================= LOGIN BUTTON =================
  loginButton:
    "btn-login hidden lg:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  loginIcon:
    "w-4 h-4",

  // ================= MOBILE TOGGLE =================
  mobileToggle:
    "lg:hidden p-3 rounded-2xl bg-slate-100 hover:bg-cyan-50 transition-all duration-300",

  toggleIcon:
    "w-6 h-6 text-slate-700",

  // ================= MOBILE MENU =================
  mobileMenu:
    "mobile-menu lg:hidden mt-4 bg-white/90 backdrop-blur-2xl border border-slate-200 rounded-[28px] shadow-2xl p-4 space-y-2",

  mobileMenuItem:
    "block px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300",

  mobileMenuItemActive:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md",

  mobileMenuItemInactive:
    "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600",

  // ================= MOBILE BUTTONS =================
  mobileDoctorAdminButton:
    "w-full flex items-center justify-center gap-2 py-3 rounded-2xl border border-slate-200 bg-white text-sm font-semibold hover:bg-slate-50 transition-all duration-300",

  mobileLoginContainer:
    "w-full mt-4",

  mobileLoginButton:
    "w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-cyan-200 transition-all duration-300",

  // ================= ANIMATIONS =================
  animationStyles: `
    @keyframes borderFlow {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    .navbar-border {
      height: 3px;
      background: linear-gradient(
        90deg,
        #06b6d4,
        #3b82f6,
        #8b5cf6,
        #06b6d4
      );
      background-size: 300% 100%;
      animation: borderFlow 8s ease infinite;
    }

    .nav-item.active {
      background: linear-gradient(
        90deg,
        #06b6d4,
        #3b82f6
      ) !important;

      color: white !important;

      box-shadow:
        0 10px 30px rgba(59,130,246,0.18);
    }

    .nav-item.active::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      border-radius: 9999px;
      background: #06b6d4;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%,100% {
        opacity: 1;
        transform: translateX(-50%) scale(1);
      }

      50% {
        opacity: 0.5;
        transform: translateX(-50%) scale(1.3);
      }
    }

    .btn-add {
      background-image:
        linear-gradient(white, white),
        linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6);

      background-origin: padding-box, border-box;
      background-clip: padding-box, border-box;
      border: 2px solid transparent;

      box-shadow:
        0 6px 18px rgba(59,130,246,0.08);
    }

    .btn-add:hover {
      transform: translateY(-3px);

      box-shadow:
        0 14px 30px rgba(59,130,246,0.18);
    }

    .btn-login {
      animation: glow 3s ease-in-out infinite;
    }

    @keyframes glow {
      0%,100% {
        box-shadow:
          0 0 20px rgba(59,130,246,0.18),
          0 4px 12px rgba(59,130,246,0.12);
      }

      50% {
        box-shadow:
          0 0 34px rgba(59,130,246,0.30),
          0 10px 24px rgba(59,130,246,0.18);
      }
    }

    .mobile-menu {
      animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `
};

// export const servicePageStyles = {
//   // Page container
//   pageContainer: "min-h-screen py-12 px-6 lg:px-20 font-serif bg-linear-to-b from-emerald-50 to-white",
//   maxWidthContainer: "max-w-6xl mx-auto",
  
//   // Header
//   header: "mb-10 text-center",
//   title: "text-4xl font-bold text-emerald-900",
//   subtitle: "mt-2 text-emerald-800/80",
  
//   // Error/Retry
//   errorContainer: "text-center mb-6",
//   errorText: "text-sm text-rose-600 mb-2",
//   retryButton: "px-4 py-2 rounded-full bg-emerald-600 text-white",
  
//   // Loading skeleton
//   skeletonGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8",
//   skeletonCard: "animate-pulse group rounded-2xl overflow-hidden bg-white shadow-xl p-4",
//   skeletonImage: "w-full h-48 bg-emerald-100 rounded mb-4",
//   skeletonText1: "h-5 bg-emerald-100 rounded w-3/4 mb-2",
//   skeletonText2: "h-4 bg-emerald-100 rounded w-1/2 mb-4",
//   skeletonButton: "h-10 bg-emerald-100 rounded w-full",
  
//   // Services grid
//   servicesGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8",
  
//   // Empty state
//   emptyState: "col-span-full text-center py-10 text-emerald-800 font-medium text-base",
// };


export const servicePageStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  maxWidthContainer:
    "relative z-10 max-w-7xl mx-auto",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  header:
    "text-center mb-16",

  title:
    "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800",

  titleGradient:
    "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  subtitle:
    "mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed",

  // ================= ERROR =================
  errorContainer:
    "text-center mb-8",

  errorText:
    "text-red-500 font-medium mb-3",

  retryButton:
    "px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= LOADING SKELETON =================
  skeletonGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  skeletonCard:
    "animate-pulse bg-white/80 backdrop-blur-xl border border-white rounded-[32px] shadow-lg overflow-hidden p-4",

  skeletonImage:
    "w-full h-56 bg-slate-200 rounded-[24px] mb-5",

  skeletonText1:
    "h-5 bg-slate-200 rounded-full w-3/4 mb-3",

  skeletonText2:
    "h-4 bg-slate-200 rounded-full w-1/2 mb-5",

  skeletonButton:
    "h-11 bg-slate-200 rounded-2xl w-full",

  // ================= SERVICES GRID =================
  servicesGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",

  // ================= SERVICE CARD =================
  serviceCard:
    "group relative bg-white/80 backdrop-blur-xl border border-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",

  // top line
  topGradient:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= IMAGE =================
  imageContainer:
    "relative h-56 overflow-hidden",

  image:
    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",

  // ================= CONTENT =================
  cardContent:
    "p-5",

  serviceTitle:
    "text-xl font-bold text-slate-800 tracking-tight group-hover:text-cyan-600 transition duration-300",

  serviceDescription:
    "mt-3 text-slate-600 text-sm leading-relaxed",

  // ================= PRICE =================
  priceContainer:
    "mt-5 flex items-center justify-between",

  priceBadge:
    "inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold shadow-sm",

  // ================= BUTTON =================
  buttonContainer:
    "mt-6",

  bookButton:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= EMPTY STATE =================
  emptyState:
    "col-span-full text-center py-16 text-slate-600 font-medium text-lg",

  // ================= CUSTOM CSS =================
  customCSS: `
    .shadow-lg {
      box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);
    }

    .shadow-2xl {
      box-shadow: 0 30px 70px rgba(15, 23, 42, 0.16);
    }

    @media (max-width: 480px) {
      .servicesGrid {
        gap: 20px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};
// export const serviceCardStyles = {
//   // Card container
//   card: "group rounded-2xl overflow-hidden bg-white shadow-xl hover:-translate-y-2 transition-transform duration-500 border border-emerald-100",
  
//   // Image container
//   imageContainer: "w-full overflow-hidden bg-emerald-50/30 flex items-center justify-center",
  
//   // Images
//   picture: "w-full",
//   responsiveImage: "w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover object-center transform group-hover:scale-105 transition-transform duration-500",
//   fallbackImage: "w-full h-60 sm:h-48 md:h-56 lg:h-60 object-cover object-center transform transition-transform duration-500",
  
//   // Content
//   content: "p-5 text-center",
//   serviceName: "text-lg md:text-sm whitespace-nowrap font-semibold font-serif text-emerald-900",
  
//   // Buttons
//   buttonContainer: "mt-4",
//   buttonAvailable: "inline-flex items-center justify-center gap-2 px-5 py-2 w-full rounded-full bg-emerald-500 text-white font-medium",
//   buttonUnavailable: "px-5 py-2 w-full flex items-center justify-center gap-2 rounded-full bg-gray-200 text-gray-500 cursor-not-allowed border",
// };



// Testimonial styles

export const serviceCardStyles = {
  // ================= CARD =================
  card:
    "group relative bg-white/80 backdrop-blur-xl border border-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500",

  // top gradient line
  topGradient:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= IMAGE CONTAINER =================
  imageContainer:
    "relative w-full overflow-hidden bg-slate-50 flex items-center justify-center",

  // ================= IMAGES =================
  picture:
    "w-full h-full",

  responsiveImage:
    "w-full h-56 sm:h-60 object-cover object-center transition-transform duration-700 group-hover:scale-110",

  fallbackImage:
    "w-full h-56 sm:h-60 object-cover object-center opacity-90",

  // ================= CONTENT =================
  content:
    "p-5 text-center",

  serviceName:
    "text-xl font-bold tracking-tight text-slate-800 group-hover:text-cyan-600 transition duration-300",

  serviceDescription:
    "mt-3 text-sm text-slate-600 leading-relaxed",

  // ================= PRICE =================
  priceContainer:
    "mt-5 flex justify-center",

  priceBadge:
    "inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold shadow-sm",

  // ================= BUTTONS =================
  buttonContainer:
    "mt-6",

  buttonAvailable:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  buttonUnavailable:
    "w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-200 text-slate-500 font-medium cursor-not-allowed border border-slate-300",

  // ================= ICONS =================
  buttonIcon:
    "w-5 h-5",

  // ================= CUSTOM SHADOWS =================
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
// export const testimonialStyles = {
//   // Main container
//   container: "min-h-[70vh] bg-linear-to-br from-slate-50 to-blue-50 py-10 px-4 relative overflow-hidden",
  
//   // Header
//   headerContainer: "max-w-6xl font-serif mx-auto text-center mb-8 sm:mb-12",
//   title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-green-600 mb-3",
//   subtitle: "text-sm sm:text-base text-gray-600 max-w-3xl mx-auto",
  
//   // Testimonial grid
//   grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch",
  
//   // Column container
//   columnContainer: "relative font-serif border-2 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm",
//   leftColumnBorder: "border-blue-200",
//   rightColumnBorder: "border-green-200",
  
//   // Column header
//   columnHeader: "py-2 font-semibold text-md sm:text-lg rounded-t-2xl text-center",
//   leftColumnHeader: "bg-blue-100 text-blue-700",
//   rightColumnHeader: "bg-green-100 text-green-700",
  
//   // Scroll container
//   scrollContainer: "h-56 sm:h-72 md:h-[360px] lg:h-[400px] overflow-y-hidden no-scrollbar p-3 sm:p-4",
  
//   // Testimonial card
//   testimonialCard: "bg-white font-[pacifico] rounded-xl shadow-lg p-4 sm:p-5 mb-4 transition-transform duration-300 border-l-4 w-full max-w-xl mx-auto",
//   leftCardBorder: "border-blue-400 hover:shadow-blue-100",
//   rightCardBorder: "border-green-400 hover:shadow-green-100",
  
//   // Card content
//   cardContent: "flex items-start space-x-3 sm:space-x-4",
//   avatar: "w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full border border-gray-200 shadow-sm",
//   textContainer: "flex-1",
//   nameRoleContainer: "flex items-center justify-between gap-3",
//   name: "font-semibold text-sm sm:text-base",
//   leftName: "text-blue-800",
//   rightName: "text-green-800",
//   role: "text-xs sm:text-sm text-gray-600",
//   quote: "text-gray-700 italic text-sm sm:text-base mt-2 leading-tight",
  
//   // Stars
//   starsContainer: "hidden sm:flex items-center gap-1",
//   mobileStarsContainer: "flex sm:hidden mt-3",
//   starContainer: "inline-block",
//   star: "w-4 h-4 inline-block",
//   activeStar: "text-yellow-400",
//   inactiveStar: "text-gray-300",
  
//   // Animation styles (to be added via style tag)
//   animationStyles: `
//     .no-scrollbar::-webkit-scrollbar { display: none; }
//     .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
//     /* subtle responsive tweaks */
//     @media (max-width: 640px) {
//       .min-h-[70vh] { min-height: auto; }
//     }
    
//     /* Respect reduced motion */
//     @media (prefers-reduced-motion: reduce) {
//       * { animation: none !important; transition: none !important; }
//     }
//   `
// };

// Add to existing dummyStyles.js
export const testimonialStyles = {
  // ================= MAIN CONTAINER =================
  container:
    "relative min-h-[80vh] py-20 px-4 bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-100px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-100px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= HEADER =================
  headerContainer:
    "relative z-10 max-w-6xl mx-auto text-center mb-16",

  title:
    "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent mb-5",

  subtitle:
    "text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed",

  // ================= GRID =================
  grid:
    "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch",

  // ================= COLUMN CONTAINER =================
  columnContainer:
    "relative bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-xl overflow-hidden transition-all duration-500",

  leftColumnBorder:
    "hover:shadow-cyan-100",

  rightColumnBorder:
    "hover:shadow-violet-100",

  // ================= COLUMN HEADER =================
  columnHeader:
    "py-4 text-lg md:text-xl font-bold text-center border-b border-slate-100",

  leftColumnHeader:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white",

  rightColumnHeader:
    "bg-gradient-to-r from-violet-500 to-purple-600 text-white",

  // ================= SCROLL CONTAINER =================
  scrollContainer:
    "h-[420px] overflow-y-auto no-scrollbar p-5 space-y-5",

  // ================= TESTIMONIAL CARD =================
  testimonialCard:
    "group bg-white border border-slate-100 rounded-[28px] shadow-md hover:shadow-2xl p-5 transition-all duration-500 hover:-translate-y-1",

  leftCardBorder:
    "hover:border-cyan-200",

  rightCardBorder:
    "hover:border-violet-200",

  // ================= CARD CONTENT =================
  cardContent:
    "flex items-start gap-4",

  avatar:
    "w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition duration-300",

  textContainer:
    "flex-1",

  nameRoleContainer:
    "flex items-center justify-between gap-3 flex-wrap",

  name:
    "font-bold text-base md:text-lg tracking-tight",

  leftName:
    "text-cyan-700",

  rightName:
    "text-violet-700",

  role:
    "text-sm text-slate-500 font-medium",

  quote:
    "text-slate-600 italic text-sm md:text-base leading-relaxed mt-3",

  // ================= STARS =================
  starsContainer:
    "hidden sm:flex items-center gap-1 mt-3",

  mobileStarsContainer:
    "flex sm:hidden items-center gap-1 mt-3",

  starContainer:
    "inline-flex",

  star:
    "w-4 h-4 transition-transform duration-300 group-hover:scale-110",

  activeStar:
    "text-yellow-400 fill-yellow-400",

  inactiveStar:
    "text-slate-300",

  // ================= CUSTOM CSS =================
  animationStyles: `
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }

    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    @media (max-width: 640px) {
      .scrollContainer {
        height: 340px;
      }

      .min-h-[80vh] {
        min-height: auto;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};



// export const serviceDetailStyles = {
//   // Page container
//   pageContainer: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-white to-green-50 px-4 lg:px-12 pt-20 sm:pt-12 md:pt-8 lg:pt-0",
  
//   // Navigation bar
//   navBar: "backdrop-blur-lg top-0 z-20",
//   navContainer: "max-w-6xl mx-auto h-16 flex items-center justify-between px-4",
//   backButton: "inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-600 border border-emerald-200 rounded-full hover:bg-emerald-50",
  
//   // Main grid layout
//   mainGrid: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-6",
  
//   // Left column
//   leftColumn: "space-y-8",
  
//   // Image
//   imageContainer: "w-full h-56 sm:h-72 md:h-96 lg:h-[65vh] xl:h-[70vh] rounded-3xl overflow-hidden shadow-2xl border border-white/50",
//   image: "w-full h-full object-cover object-center transition-transform duration-500",
  
//   // Details form
//   detailsContainer: "bg-white p-6 rounded-2xl shadow-xl border border-emerald-100",
//   detailsTitle: "text-lg font-semibold text-emerald-700 flex items-center gap-2 mb-4",
//   detailsGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
  
//   // Input fields
//   input: "px-4 py-3 rounded-full border border-emerald-200 focus:ring-2 focus:ring-emerald-300 w-full",
//   invalidInput: "px-4 py-3 rounded-full border border-rose-500 focus:ring-2 focus:ring-emerald-300 w-full",
//   emailInput: "px-4 py-3 rounded-full border border-emerald-200 focus:ring-2 focus:ring-emerald-300 w-full sm:col-span-2",
  
//   // Payment method
//   paymentLabel: "font-semibold text-emerald-800 block mb-2",
//   paymentOptions: "inline-flex gap-2",
//   paymentOption: (isSelected) => 
//     `px-3 py-1 rounded-full cursor-pointer border ${isSelected ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-emerald-700 border-emerald-100"}`,
//   paymentInput: "hidden",
  
//   // Date selection
//   dateSection: "mt-4",
//   dateTitle: "text-xl font-semibold text-emerald-900 mb-2",
//   dateScrollContainer: "overflow-x-auto -mx-2 px-2",
//   dateButtonsContainer: "inline-flex gap-3 sm:flex sm:flex-wrap",
//   dateButton: (isSelected) => 
//     `px-5 py-2 rounded-full cursor-pointer border transition whitespace-nowrap min-w-[140px] sm:min-w-0 ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-emerald-300 text-emerald-700 hover:bg-emerald-100"}`,
  
//   // Time selection
//   timeSection: "mt-4",
//   timeTitle: "text-xl font-semibold text-emerald-900 mb-2",
//   timeScrollContainer: "overflow-x-auto -mx-2 px-2",
//   timeButtonsContainer: "inline-flex gap-3 sm:flex sm:flex-wrap",
//   timeButton: (isSelected) => 
//     `px-5 py-2 rounded-full cursor-pointer border transition whitespace-nowrap min-w-[140px] sm:min-w-0 flex items-center gap-2 ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "bg-white border-emerald-300 text-emerald-700 hover:bg-emerald-100"}`,
//   noSlotsMessage: "text-emerald-600/80 p-2",
  
//   // Submit button
//   errorMessage: "text-rose-600 mb-2",
//   successMessage: "text-emerald-700 mb-2",
//   submitButton: (isValid, isSubmitting) => 
//     `w-full py-4 md:mb-8 rounded-full cursor-pointer text-lg font-semibold flex items-center justify-center gap-3 transition ${isValid && !isSubmitting ? "bg-linear-to-br from-emerald-500 to-green-500 text-white shadow-lg hover:opacity-90" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
  
//   // Right column
//   rightColumn: "bg-white/80 rounded-3xl shadow-xl p-6 sm:p-8 border border-white/50 h-fit",
//   serviceName: "text-2xl lg:text-3xl xl:text-3xl md:text-2xl sm:text-4xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
  
//   // About section
//   aboutContainer: "mt-6 bg-emerald-50 p-5 rounded-xl border border-emerald-100",
//   aboutTitle: "flex items-center gap-3 text-md md:text-xl lg:text-xl xl:text-xl font-semibold text-emerald-900",
//   aboutText: "text-emerald-800 mt-2",
  
//   // Price display
//   priceContainer: "mt-6 rounded-full flex items-center gap-3 bg-emerald-50 w-fit px-5 py-3 border border-emerald-100",
//   priceText: "font-bold text-xl text-emerald-900",
  
//   // Instructions
//   instructionsContainer: "mt-8",
//   instructionsTitle: "text-xl font-semibold text-emerald-900 mb-3",
//   instructionsList: "list-disc pl-6 text-emerald-700 space-y-1",
  
//   // Booking summary
//   summaryContainer: "mt-8 bg-linear-to-r from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100",
//   summaryTitle: "text-lg font-semibold text-emerald-800 mb-4",
//   summaryContent: "space-y-2 text-emerald-700 text-sm sm:text-base",
//   summaryItem: "",
  
//   // Loading and error states
//   loadingContainer: "min-h-screen flex items-center justify-center p-8",
//   loadingCard: "bg-white p-8 rounded-xl shadow-lg text-center",
//   loadingTitle: "text-2xl font-semibold",
//   loadingText: "mt-2 text-gray-600",
//   backToServices: "inline-block mt-4 px-4 py-2 bg-emerald-600 text-white rounded-full",
// };



// DoctorDetail styles
export const serviceDetailStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-4 lg:px-12 pt-24 lg:pt-8 overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= NAVBAR =================
  navBar:
    "sticky top-0 z-30 backdrop-blur-2xl bg-white/70 border-b border-white shadow-sm",

  navContainer:
    "max-w-7xl mx-auto h-16 flex items-center justify-between px-4",

  backButton:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-cyan-600 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  // ================= MAIN GRID =================
  mainGrid:
    "relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8",

  // ================= LEFT COLUMN =================
  leftColumn:
    "space-y-8",

  // ================= IMAGE =================
  imageContainer:
    "relative overflow-hidden rounded-[36px] shadow-2xl border border-white bg-white p-2",

  image:
    "w-full h-[320px] sm:h-[420px] lg:h-[70vh] object-cover rounded-[28px] transition-transform duration-700 hover:scale-105",

  // ================= FORM CARD =================
  detailsContainer:
    "bg-white/80 backdrop-blur-2xl border border-white shadow-xl rounded-[32px] p-6 md:p-8",

  detailsTitle:
    "text-xl font-bold text-slate-800 flex items-center gap-3 mb-6",

  detailsGrid:
    "grid grid-cols-1 sm:grid-cols-2 gap-5",

  // ================= INPUTS =================
  input:
    "w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  invalidInput:
    "w-full px-5 py-3.5 rounded-2xl border border-red-300 bg-red-50 text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300",

  emailInput:
    "w-full sm:col-span-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  // ================= PAYMENT =================
  paymentLabel:
    "block text-slate-700 font-semibold mb-3",

  paymentOptions:
    "flex flex-wrap gap-3",

  paymentOption: (isSelected) =>
    `px-5 py-2.5 rounded-2xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${
      isSelected
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg"
        : "bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-cyan-600"
    }`,

  paymentInput:
    "hidden",

  // ================= DATE SECTION =================
  dateSection:
    "mt-6",

  dateTitle:
    "text-lg font-bold text-slate-800 mb-3",

  dateScrollContainer:
    "overflow-x-auto no-scrollbar",

  dateButtonsContainer:
    "flex gap-3 flex-nowrap sm:flex-wrap pb-2",

  dateButton: (isSelected) =>
    `px-5 py-3 rounded-2xl whitespace-nowrap border font-medium transition-all duration-300 ${
      isSelected
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg"
        : "bg-white border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
    }`,

  // ================= TIME SECTION =================
  timeSection:
    "mt-6",

  timeTitle:
    "text-lg font-bold text-slate-800 mb-3",

  timeScrollContainer:
    "overflow-x-auto no-scrollbar",

  timeButtonsContainer:
    "flex gap-3 flex-nowrap sm:flex-wrap pb-2",

  timeButton: (isSelected) =>
    `px-5 py-3 rounded-2xl whitespace-nowrap border flex items-center gap-2 font-medium transition-all duration-300 ${
      isSelected
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg"
        : "bg-white border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
    }`,

  noSlotsMessage:
    "text-slate-500 text-sm",

  // ================= BUTTON =================
  errorMessage:
    "text-red-500 text-sm font-medium mb-3",

  successMessage:
    "text-emerald-600 text-sm font-medium mb-3",

  submitButton: (isValid, isSubmitting) =>
    `w-full py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 ${
      isValid && !isSubmitting
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-200 hover:-translate-y-1"
        : "bg-slate-200 text-slate-500 cursor-not-allowed"
    }`,

  // ================= RIGHT COLUMN =================
  rightColumn:
    "bg-white/80 backdrop-blur-2xl border border-white rounded-[36px] shadow-xl p-6 md:p-8 h-fit",

  serviceName:
    "text-3xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  // ================= ABOUT =================
  aboutContainer:
    "mt-8 bg-cyan-50 border border-cyan-100 rounded-[28px] p-6",

  aboutTitle:
    "flex items-center gap-3 text-xl font-bold text-slate-800",

  aboutText:
    "mt-3 text-slate-600 leading-relaxed",

  // ================= PRICE =================
  priceContainer:
    "mt-8 inline-flex items-center gap-3 bg-white border border-cyan-100 rounded-full px-6 py-3 shadow-sm",

  priceText:
    "text-2xl font-bold text-cyan-700",

  // ================= INSTRUCTIONS =================
  instructionsContainer:
    "mt-10",

  instructionsTitle:
    "text-xl font-bold text-slate-800 mb-4",

  instructionsList:
    "space-y-2 text-slate-600 leading-relaxed list-disc pl-5",

  // ================= SUMMARY =================
  summaryContainer:
    "mt-10 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-[28px] p-6 shadow-inner",

  summaryTitle:
    "text-lg font-bold text-slate-800 mb-4",

  summaryContent:
    "space-y-3 text-slate-600 text-sm md:text-base",

  summaryItem:
    "flex items-center justify-between",

  // ================= LOADING =================
  loadingContainer:
    "min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-cyan-50 via-white to-violet-50",

  loadingCard:
    "bg-white/80 backdrop-blur-2xl border border-white shadow-xl rounded-[32px] p-10 text-center",

  loadingTitle:
    "text-3xl font-bold text-slate-800",

  loadingText:
    "mt-3 text-slate-500",

  backToServices:
    "inline-flex items-center justify-center mt-6 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",
};

// export const doctorDetailStyles = {
//   // Main container
//   pageContainer: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden",
  
//   // Loading/Error states
//   loadingContainer: "min-h-screen flex items-center justify-center",
//   errorContainer: "min-h-screen flex items-center justify-center",
//   errorContent: "text-center",
//   errorText: "text-red-600 mb-2",
//   errorMessage: "text-gray-700",
//   backButton: "inline-flex items-center gap-2 mt-4 px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-all",
//   backButtonIcon: "size={20}",
  
//   // Not found state
//   notFoundContainer: "min-h-screen flex items-center justify-center",
//   notFoundContent: "text-center",
//   notFoundEmoji: "text-6xl mb-4",
//   notFoundTitle: "text-2xl font-bold text-gray-700",
  
//   // Header
//   headerContainer: "relative z-10 bg-white/80 backdrop-blur-lg border-b border-emerald-100 top-0",
//   headerContent: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
//   headerFlex: "flex items-center justify-between h-16",
//   headerBackButton: "inline-flex items-center gap-2 px-2 xl:px-4 lg:px-4 py-2 bg-white text-emerald-600 border border-emerald-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md",
//   headerBackButtonIcon: "size={18}",
//   headerBackButtonText: "font-medium",
//   headerTitle: "text-sm md:text-2xl lg:text-xl xl:text-2xl whitespace-nowrap font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
//   headerRatingContainer: "flex items-center gap-2 px-2 py-2 bg-white rounded-full shadow-sm border border-amber-100",
//   headerRatingIcon: "text-amber-400 fill-current",
//   headerRatingText: "font-semibold text-amber-600",
  
//   // Main content wrapper
//   mainContent: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-8 transition-all duration-700",
//   visibleState: "opacity-100 translate-y-0",
//   hiddenState: "opacity-0 translate-y-8",
  
//   // Profile card
//   profileCard: "bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-8",
//   profileGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 sm:p-8",
  
//   // Left column (avatar)
//   leftColumn: "lg:col-span-1 flex flex-col items-center space-y-6",
//   avatarContainer: "relative",
//   avatarGlow: "absolute -inset-2 sm:-inset-3 md:-inset-6 bg-linear-to-br from-emerald-400 to-green-400 rounded-full blur-lg opacity-50 animate-pulse",
//   avatarImage: "relative w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 sm:border-6 md:border-8 border-white shadow-2xl z-10 transition-transform duration-300",
//   statsGrid: "grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-4 w-full max-w-lg px-2",
//   statBox: "text-center p-3 sm:p-4 bg-white rounded-2xl shadow-lg border border-emerald-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
//   statIcon: "w-5 h-5 mx-auto mb-2",
//   heartIcon: "text-rose-500",
//   awardIcon: "text-amber-500",
//   usersIcon: "text-emerald-500",
//   statValue: "text-lg font-bold text-gray-800",
//   statLabel: "text-xs text-gray-500",
  
//   // Right column (doctor info)
//   rightColumn: "lg:col-span-2 space-y-6",
//   doctorName: "text-2xl md:text-2xl lg:text-3xl xl:text-3xl sm:text-4xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
//   specializationBadge: "inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-emerald-400 to-green-500 text-white rounded-full text-sm font-semibold shadow-lg",
//   badgeIcon: "w-4 h-4",
  
//   // Info grid
//   infoGrid: "grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4",
//   infoItem: "flex items-start gap-3 md:p-3 p-4 bg-white rounded-full shadow-sm border border-emerald-50",
//   infoIcon: "w-5 h-5 text-emerald-500 mt-1",
//   infoLabel: "text-sm font-semibold text-emerald-600",
//   infoValue: "text-gray-700 font-medium",
//   feeValue: "text-lg font-bold text-rose-600",
  
//   // About section
//   aboutContainer: "p-6 bg-white rounded-2xl shadow-sm border border-emerald-50",
//   aboutHeader: "flex items-center gap-2 mb-4",
//   aboutIcon: "w-5 h-5 text-emerald-500",
//   aboutTitle: "text-lg font-semibold text-emerald-700",
//   aboutText: "text-gray-600 leading-relaxed",
  
//   // Appointment section
//   appointmentContainer: "bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 overflow-hidden",
//   appointmentContent: "p-6 sm:p-8",
//   appointmentHeader: "flex items-center gap-3 mb-6",
//   appointmentIcon: "w-6 h-6 text-emerald-500",
//   appointmentTitle: "text-md md:text-2xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
  
//   // Appointment grid
//   appointmentGrid: "grid grid-cols-1 lg:grid-cols-2 gap-6",
  
//   // Date selection
//   dateSection: "space-y-6",
//   dateTitle: "text-lg md:text-xl font-semibold text-emerald-700 flex items-center gap-2",
//   dateTitleIcon: "w-5 h-5",
//   dateScrollContainer: "overflow-x-auto -mx-2 px-2",
//   dateButtonsContainer: "inline-grid grid-flow-col auto-cols-max gap-3 sm:grid sm:grid-flow-row sm:auto-cols-auto sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-6",
//   dateButton: "p-2 sm:p-3 rounded-full cursor-pointer border-2 transition-all whitespace-nowrap",
//   dateButtonSelected: "bg-linear-to-br from-emerald-500 to-green-500 text-white border-emerald-500 shadow-lg",
//   dateButtonUnselected: "bg-white text-gray-700 border-emerald-100",
//   dateContent: "text-center",
//   dateWeekday: "text-xs sm:text-sm opacity-80",
//   dateDay: "text-xl sm:text-2xl font-bold",
//   dateMonth: "text-xs opacity-80",
  
//   // Patient form
//   patientForm: "bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm",
//   patientFormTitle: "text-lg font-semibold text-emerald-700 mb-4",
//   patientFormGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
//   formInput: "p-3 rounded-full border border-emerald-200 w-full",
//   emailInput: "p-3 rounded-full border border-emerald-200 w-full md:col-span-2",
//   formSelect: "p-3 rounded-full border border-emerald-200 w-full",
  
//   // Time slots
//   timeSlotsSection: "space-y-6",
//   timeSlotsTitle: "text-lg font-semibold text-emerald-700 flex items-center gap-2",
//   timeSlotsIcon: "w-5 h-5",
//   timeSlotsContainer: "flex gap-3 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3",
//   noSlotsMessage: "text-gray-500",
//   timeSlotButton: "min-w-[140px] p-2 rounded-full border-2",
//   timeSlotButtonSelected: "bg-linear-to-br from-emerald-500 to-green-500 text-white border-emerald-500",
//   timeSlotButtonUnselected: "bg-white text-gray-700 border-emerald-100",
//   timeSlotContent: "flex items-center justify-center gap-2",
//   timeSlotIcon: "w-4 h-4",
  
//   // Summary section
//   summaryContainer: "bg-linear-to-r from-emerald-50 to-green-50 p-4 sm:p-6 rounded-2xl border border-emerald-100",
//   summaryItem: "space-y-3 mb-4 sm:mb-6",
//   summaryRow: "flex justify-between",
//   summaryLabel: "text-md text-gray-600",
//   summaryValue: "font-semibold text-emerald-700 text-sm sm:text-base",
//   feeDisplay: "font-bold text-rose-600",
  
//   // Payment method
//   paymentContainer: "mb-3 flex items-center gap-3",
//   paymentLabel: "text-sm font-medium text-emerald-700",
//   paymentOptions: "inline-flex gap-2",
//   paymentOption: "px-3 py-1 rounded-full cursor-pointer border",
//   paymentOptionSelected: "bg-emerald-600 text-white border-emerald-600",
//   paymentOptionUnselected: "bg-white text-emerald-700 border-emerald-100",
//   paymentRadio: "hidden",
  
//   // Booking button
//   bookingButton: "w-full py-3 sm:py-4 px-4 rounded-full font-semibold text-sm cursor-pointer transition-all",
//   bookingButtonEnabled: "bg-linear-to-r from-emerald-500 to-green-500 text-white",
//   bookingButtonDisabled: "bg-gray-300 text-gray-500",
//   bookingButtonContent: "flex items-center justify-center gap-3",
//   bookingIcon: "w-5 h-5",
  
//   // Toast container
//   toastContainer: "ToastContainer"
// };

export const doctorDetailStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= LOADING / ERROR =================
  loadingContainer:
    "min-h-screen flex items-center justify-center",

  errorContainer:
    "min-h-screen flex items-center justify-center",

  errorContent:
    "text-center bg-white/80 backdrop-blur-2xl border border-white shadow-xl rounded-[32px] p-10",

  errorText:
    "text-red-500 font-semibold mb-2",

  errorMessage:
    "text-slate-600",

  backButton:
    "inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  backButtonIcon:
    "w-5 h-5",

  // ================= NOT FOUND =================
  notFoundContainer:
    "min-h-screen flex items-center justify-center",

  notFoundContent:
    "text-center bg-white/80 backdrop-blur-2xl border border-white shadow-xl rounded-[32px] p-10",

  notFoundEmoji:
    "text-7xl mb-5",

  notFoundTitle:
    "text-3xl font-bold text-slate-700",

  // ================= HEADER =================
  headerContainer:
    "sticky top-0 z-30 bg-white/70 backdrop-blur-2xl border-b border-white shadow-sm",

  headerContent:
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  headerFlex:
    "flex items-center justify-between h-20",

  headerBackButton:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-cyan-600 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  headerBackButtonIcon:
    "w-4 h-4",

  headerBackButtonText:
    "font-medium",

  headerTitle:
    "text-lg md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerRatingContainer:
    "flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-100 shadow-sm",

  headerRatingIcon:
    "text-yellow-400 fill-yellow-400",

  headerRatingText:
    "font-semibold text-yellow-600",

  // ================= MAIN CONTENT =================
  mainContent:
    "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-all duration-700",

  visibleState:
    "opacity-100 translate-y-0",

  hiddenState:
    "opacity-0 translate-y-8",

  // ================= PROFILE CARD =================
  profileCard:
    "bg-white/80 backdrop-blur-2xl border border-white rounded-[36px] shadow-2xl overflow-hidden mb-10",

  profileGrid:
    "grid grid-cols-1 lg:grid-cols-3 gap-10 p-6 md:p-10",

  // ================= LEFT COLUMN =================
  leftColumn:
    "flex flex-col items-center space-y-8",

  avatarContainer:
    "relative",

  avatarGlow:
    "absolute -inset-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse",

  avatarImage:
    "relative w-44 h-44 md:w-64 md:h-64 rounded-full object-cover border-[8px] border-white shadow-2xl z-10 transition-transform duration-500 hover:scale-105",

  statsGrid:
    "grid grid-cols-2 xl:grid-cols-3 gap-4 w-full",

  statBox:
    "text-center p-4 rounded-[24px] bg-white border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300",

  statIcon:
    "w-5 h-5 mx-auto mb-2",

  heartIcon:
    "text-rose-500",

  awardIcon:
    "text-yellow-500",

  usersIcon:
    "text-cyan-500",

  statValue:
    "text-xl font-bold text-slate-800",

  statLabel:
    "text-xs text-slate-500 mt-1",

  // ================= RIGHT COLUMN =================
  rightColumn:
    "lg:col-span-2 space-y-8",

  doctorName:
    "text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  specializationBadge:
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg",

  badgeIcon:
    "w-4 h-4",

  // ================= INFO GRID =================
  infoGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-5",

  infoItem:
    "flex items-start gap-4 p-4 rounded-[24px] bg-white border border-slate-100 shadow-sm",

  infoIcon:
    "w-5 h-5 text-cyan-500 mt-1",

  infoLabel:
    "text-sm font-semibold text-cyan-600",

  infoValue:
    "text-slate-700 font-medium mt-1",

  feeValue:
    "text-xl font-bold text-rose-500",

  // ================= ABOUT =================
  aboutContainer:
    "bg-cyan-50 border border-cyan-100 rounded-[28px] p-6",

  aboutHeader:
    "flex items-center gap-3 mb-4",

  aboutIcon:
    "w-5 h-5 text-cyan-500",

  aboutTitle:
    "text-xl font-bold text-slate-800",

  aboutText:
    "text-slate-600 leading-relaxed",

  // ================= APPOINTMENT SECTION =================
  appointmentContainer:
    "bg-white/80 backdrop-blur-2xl border border-white rounded-[36px] shadow-2xl overflow-hidden",

  appointmentContent:
    "p-6 md:p-10",

  appointmentHeader:
    "flex items-center gap-3 mb-8",

  appointmentIcon:
    "w-6 h-6 text-cyan-500",

  appointmentTitle:
    "text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",

  // ================= APPOINTMENT GRID =================
  appointmentGrid:
    "grid grid-cols-1 lg:grid-cols-2 gap-8",

  // ================= DATE SECTION =================
  dateSection:
    "space-y-6",

  dateTitle:
    "text-xl font-bold text-slate-800 flex items-center gap-2",

  dateTitleIcon:
    "w-5 h-5 text-cyan-500",

  dateScrollContainer:
    "overflow-x-auto no-scrollbar",

  dateButtonsContainer:
    "flex gap-3 flex-nowrap sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",

  dateButton:
    "p-3 rounded-[24px] border transition-all duration-300 min-w-[120px]",

  dateButtonSelected:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg",

  dateButtonUnselected:
    "bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-cyan-600",

  dateContent:
    "text-center",

  dateWeekday:
    "text-xs opacity-80",

  dateDay:
    "text-2xl font-bold",

  dateMonth:
    "text-xs opacity-80",

  // ================= PATIENT FORM =================
  patientForm:
    "bg-white border border-slate-100 rounded-[28px] p-6 shadow-sm",

  patientFormTitle:
    "text-xl font-bold text-slate-800 mb-5",

  patientFormGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-5",

  formInput:
    "w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  emailInput:
    "w-full md:col-span-2 px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  formSelect:
    "w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  // ================= TIME SLOTS =================
  timeSlotsSection:
    "space-y-6",

  timeSlotsTitle:
    "text-xl font-bold text-slate-800 flex items-center gap-2",

  timeSlotsIcon:
    "w-5 h-5 text-cyan-500",

  timeSlotsContainer:
    "flex gap-3 overflow-x-auto sm:grid sm:grid-cols-2 xl:grid-cols-3",

  noSlotsMessage:
    "text-slate-500",

  timeSlotButton:
    "min-w-[140px] p-3 rounded-[22px] border transition-all duration-300",

  timeSlotButtonSelected:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg",

  timeSlotButtonUnselected:
    "bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-cyan-600",

  timeSlotContent:
    "flex items-center justify-center gap-2",

  timeSlotIcon:
    "w-4 h-4",

  // ================= SUMMARY =================
  summaryContainer:
    "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-[28px] p-6 shadow-inner",

  summaryItem:
    "space-y-4 mb-6",

  summaryRow:
    "flex justify-between items-center",

  summaryLabel:
    "text-slate-500",

  summaryValue:
    "font-semibold text-slate-700",

  feeDisplay:
    "font-bold text-rose-500 text-lg",

  // ================= PAYMENT =================
  paymentContainer:
    "mb-5 flex items-center gap-4 flex-wrap",

  paymentLabel:
    "text-sm font-semibold text-slate-700",

  paymentOptions:
    "flex gap-3",

  paymentOption:
    "px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-pointer",

  paymentOptionSelected:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-md",

  paymentOptionUnselected:
    "bg-white text-slate-600 border-slate-200 hover:border-cyan-300 hover:text-cyan-600",

  paymentRadio:
    "hidden",

  // ================= BOOK BUTTON =================
  bookingButton:
    "w-full py-4 px-5 rounded-2xl font-semibold text-base transition-all duration-300",

  bookingButtonEnabled:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-200 hover:-translate-y-1",

  bookingButtonDisabled:
    "bg-slate-200 text-slate-500 cursor-not-allowed",

  bookingButtonContent:
    "flex items-center justify-center gap-3",

  bookingIcon:
    "w-5 h-5",

  // ================= TOAST =================
  toastContainer:
    "ToastContainer",
};

// export const navbarStylesDr = {
//   // Main navbar
//   navContainer: "fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full md:max-w-2xl lg:max-w-4xl px-4 py-0 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 shadow-2xl flex items-center justify-between gap-3 font-serif transition-all duration-300 hover:shadow-emerald-200/80 hover:-translate-y-0.5",
  
//   // Left brand section
//   leftBrand: "flex items-center gap-3",
//   logoContainer: "w-20 h-20 flex items-center justify-center rounded-full transform transition-all duration-300 hover:rotate-1 overflow-hidden",
//   logoImage: "w-full h-full object-contain p-1",
//   brandTextContainer: "md:block",
//   brandTitle: "text-3xl text-emerald-700 font-semibold tracking-wide",
//   brandSubtitle: "text-xs text-emerald-600",
  
//   // Desktop menu
//   desktopMenu: "hidden lg:flex flex-1 justify-center",
//   desktopMenuItems: "flex items-center gap-2 px-2",
  
//   // Link styles
//   baseLink: "relative flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 transform",
//   activeLink: "bg-emerald-600 text-white shadow-lg scale-105 ring-2 ring-emerald-200",
//   inactiveLink: "text-emerald-700 hover:bg-emerald-50 hover:text-emerald-900 hover:-translate-y-0.5 hover:shadow",
  
//   // Link content
//   linkContent: "relative flex items-center gap-2",
//   linkIcon: "opacity-90",
//   linkText: "text-[13px]",
  
//   // Right side actions
//   rightActions: "flex items-center gap-3",
  
//   // Logout button (desktop)
//   logoutButtonDesktop: "hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 border border-emerald-200 shadow-sm text-sm font-semibold transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5",
  
//   // Hamburger menu buttons
//   hamburgerButtonMd: "md:hidden p-2 rounded-md hover:bg-emerald-50 transition-colors",
//   hamburgerButtonLg: "hidden md:flex lg:hidden p-2 rounded-md hover:bg-emerald-50 transition-colors",
  
//   // Mobile/tablet menu
//   mobileMenuContainer: (isOpen) => 
//     `lg:hidden fixed top-30 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-white/95 backdrop-blur-md border border-emerald-100 rounded-2xl shadow-lg transform origin-top transition-all duration-200 ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"}`,
  
//   mobileMenuContent: "flex flex-col p-3 gap-2",
  
//   // Mobile nav links
//   mobileBaseLink: "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
//   mobileActiveLink: "bg-emerald-50 text-emerald-900",
//   mobileInactiveLink: "text-emerald-800 hover:bg-emerald-50",
  
//   // Mobile logout button
//   mobileLogoutButton: "mt-2 px-4 py-2 rounded-full text-center bg-emerald-500 text-white font-semibold text-sm shadow-sm transition-transform duration-150 hover:scale-105 w-full",
//   mobileLogoutContent: "flex items-center justify-center gap-2",
  
//   // Spacer
//   spacer: "h-20 lg:h-20",
  
//   // Icon sizes
//   iconSmall: "size={16}",
//   iconMedium: "size={18}",
//   iconLarge: "size={20}"
// };



// ListPage styles

export const navbarStylesDr = {
  // ================= MAIN NAVBAR =================
  navContainer:
    "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-3xl lg:max-w-5xl px-5 py-2 rounded-full bg-white/80 backdrop-blur-2xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4 transition-all duration-500",

  // ================= LEFT BRAND =================
  leftBrand:
    "flex items-center gap-3",

  logoContainer:
    "relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-md overflow-hidden group-hover:scale-105 transition-all duration-500",

  logoImage:
    "w-14 h-14 md:w-16 md:h-16 object-contain scale-110 drop-shadow-md",

  brandTextContainer:
    "hidden sm:block",

  brandTitle:
    "text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  brandSubtitle:
    "text-xs text-slate-500 font-medium tracking-wide mt-1",

  // ================= DESKTOP MENU =================
  desktopMenu:
    "hidden lg:flex flex-1 justify-center",

  desktopMenuItems:
    "flex items-center gap-2 bg-white/90 border border-slate-200 backdrop-blur-xl p-1.5 rounded-full shadow-lg",

  // ================= LINKS =================
  baseLink:
    "relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",

  activeLink:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg",

  inactiveLink:
    "text-slate-600 hover:text-cyan-600 hover:bg-cyan-50",

  // ================= LINK CONTENT =================
  linkContent:
    "relative flex items-center gap-2",

  linkIcon:
    "opacity-90",

  linkText:
    "text-sm",

  // ================= RIGHT ACTIONS =================
  rightActions:
    "flex items-center gap-3",

  // ================= LOGOUT BUTTON DESKTOP =================
  logoutButtonDesktop:
    "hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= HAMBURGER =================
  hamburgerButtonMd:
    "md:hidden p-3 rounded-2xl bg-slate-100 hover:bg-cyan-50 transition-all duration-300",

  hamburgerButtonLg:
    "hidden md:flex lg:hidden p-3 rounded-2xl bg-slate-100 hover:bg-cyan-50 transition-all duration-300",

  // ================= MOBILE MENU =================
  mobileMenuContainer: (isOpen) =>
    `lg:hidden fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-white/90 backdrop-blur-2xl border border-white rounded-[28px] shadow-2xl transition-all duration-300 ${
      isOpen
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
    }`,

  mobileMenuContent:
    "flex flex-col p-4 gap-2",

  // ================= MOBILE LINKS =================
  mobileBaseLink:
    "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300",

  mobileActiveLink:
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md",

  mobileInactiveLink:
    "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600",

  // ================= MOBILE LOGOUT =================
  mobileLogoutButton:
    "mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 transition-all duration-300",

  mobileLogoutContent:
    "flex items-center justify-center gap-2",

  // ================= SPACER =================
  spacer:
    "h-24",

  // ================= ICON SIZES =================
  iconSmall:
    "w-4 h-4",

  iconMedium:
    "w-5 h-5",

  iconLarge:
    "w-6 h-6",

  // ================= CUSTOM CSS =================
  animationStyles: `
    @keyframes glow {
      0%,100% {
        box-shadow:
          0 0 20px rgba(59,130,246,0.12),
          0 6px 18px rgba(59,130,246,0.10);
      }

      50% {
        box-shadow:
          0 0 35px rgba(59,130,246,0.22),
          0 12px 28px rgba(59,130,246,0.16);
      }
    }

    .logout-glow {
      animation: glow 3s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
        transition: none !important;
      }
    }
  `
};
// export const listPageStyles = {
//   // Main container
//   pageContainer: "min-h-screen pt-20 md:pt-25 lg:pt-25 font-serif p-4 sm:p-6 bg-linear-to-br from-emerald-50 to-white",
  
//   // Content wrapper
//   contentWrapper: "max-w-7xl mx-auto",
  
//   // Header section
//   headerContainer: "mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
//   headerTitle: "text-xl sm:text-xl pt-5 md:pt-0 lg:pt-0 xl:pt-0 font-extrabold text-emerald-900",
//   headerSubtitle: "text-xs sm:text-sm text-emerald-700",
  
//   // Search and filter section
//   searchFilterContainer: "flex flex-col pt-10 md:pt-0 sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto",
//   searchContainer: "relative w-full sm:w-auto",
//   searchIconContainer: "absolute inset-y-0 left-3 flex items-center pointer-events-none text-emerald-400",
//   searchIcon: "w-4 h-4",
//   searchInput: "pl-10 pr-10 w-full sm:w-64 md:w-80 lg:w-96 py-2 rounded-full border border-emerald-200 bg-white text-emerald-800 focus:ring-2 focus:ring-emerald-200 outline-none",
//   clearSearchButton: "absolute right-2 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-900 p-1 rounded-full",
//   clearSearchIcon: "w-4 h-4",
//   statusFilter: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white w-full sm:w-auto",
  
//   // Loading and error states
//   loadingContainer: "text-center py-8 text-emerald-600",
//   errorContainer: "text-center py-8 text-rose-600",
  
//   // Appointments grid
//   appointmentsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start",
  
//   // Appointment card
//   appointmentCard: "rounded-2xl p-4 bg-white shadow-sm border border-emerald-100 hover:shadow-md transition flex flex-col justify-between self-start",
  
//   // Card header
//   cardHeader: "flex flex-col sm:flex-row items-start sm:items-center gap-3",
//   cardAvatar: "w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center",
//   cardAvatarImage: "w-full h-full object-cover",
//   cardAvatarFallback: "text-emerald-700 font-bold",
//   cardContent: "flex-1 min-w-0",
//   cardPatientName: "text-sm md:text-lg font-bold text-emerald-900 truncate",
//   cardPatientInfo: "text-xs md:text-sm text-emerald-700 mt-1",
//   cardDoctorInfo: "mt-2 text-sm text-emerald-700 truncate",
//   cardDoctorName: "font-semibold text-emerald-900",
//   cardSpeciality: "text-sm text-emerald-800 font-medium truncate",
  
//   // Date and time section
//   dateTimeSection: "mt-4 flex flex-col items-start gap-3",
//   dateTimeContainer: "text-md md:text-lg text-emerald-800 font-bold flex items-center gap-2 w-full",
//   calendarIcon: "w-4 h-4",
//   dateText: "whitespace-nowrap truncate",
//   feeText: "text-sm text-emerald-800 font-semibold",
  
//   // Contact and status section
//   contactStatusSection: "mt-4 flex flex-col items-start gap-3",
//   phoneContainer: "text-sm text-emerald-700 flex items-center gap-2",
//   phoneIcon: "w-4 h-4",
//   phoneNumber: "truncate",
//   statusContainer: "flex items-center gap-2 w-full mt-2 justify-start",
  
//   // Status badge
//   statusBadgeBase: "px-3 py-1 rounded-full text-xs font-semibold",
//   statusBadgeComplete: "bg-emerald-100 text-emerald-800 border border-emerald-200",
//   statusBadgeCancelled: "bg-rose-100 text-rose-800 border border-rose-200",
//   statusBadgeConfirmed: "bg-emerald-200 text-emerald-900 border border-emerald-300",
//   statusBadgeRescheduled: "bg-indigo-100 text-indigo-900 border border-indigo-200",
//   statusBadgePending: "bg-yellow-100 text-amber-800 border border-amber-200 animate-pulse",
  
//   // Status select
//   statusSelect: "text-sm px-3 py-1 rounded-full border focus:outline-none transition",
//   statusSelectEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
//   statusSelectDisabled: "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200",
  
//   // Reschedule button container
//   rescheduleContainer: "mt-4",
//   rescheduleButton: "text-sm px-3 py-1 rounded-full border transition",
//   rescheduleButtonEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
//   rescheduleButtonDisabled: "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed",
  
//   // Reschedule form
//   rescheduleForm: "flex flex-col md:flex-col items-end gap-2 w-full",
//   dateInput: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-40",
//   timeInput: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-36",
//   rescheduleButtons: "flex gap-2",
//   saveButton: "text-sm px-3 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition",
//   cancelButton: "text-sm px-3 py-2 rounded-full border border-emerald-200 bg-white text-emerald-800 hover:shadow-sm transition"
// };

// Add to existing dummyStyles.js

export const listPageStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen pt-24 md:pt-28 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= CONTENT WRAPPER =================
  contentWrapper:
    "relative z-10 max-w-7xl mx-auto",

  // ================= HEADER =================
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10",

  headerTitle:
    "text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerSubtitle:
    "text-slate-500 text-sm md:text-base mt-2",

  // ================= SEARCH + FILTER =================
  searchFilterContainer:
    "flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto",

  searchContainer:
    "relative w-full",

  searchIconContainer:
    "absolute inset-y-0 left-4 flex items-center text-slate-400",

  searchIcon:
    "w-5 h-5",

  searchInput:
    "w-full sm:w-72 md:w-80 lg:w-96 pl-12 pr-12 py-3.5 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  clearSearchButton:
    "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full text-slate-500 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300",

  clearSearchIcon:
    "w-4 h-4",

  statusFilter:
    "px-4 py-3 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300",

  // ================= STATES =================
  loadingContainer:
    "text-center py-12 text-cyan-600 font-semibold",

  errorContainer:
    "text-center py-12 text-red-500 font-semibold",

  // ================= APPOINTMENT GRID =================
  appointmentsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start",

  // ================= APPOINTMENT CARD =================
  appointmentCard:
    "group bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden p-5 flex flex-col justify-between",

  // top line
  topGradient:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  // ================= CARD HEADER =================
  cardHeader:
    "flex items-center gap-4",

  cardAvatar:
    "w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100 flex items-center justify-center",

  cardAvatarImage:
    "w-full h-full object-cover",

  cardAvatarFallback:
    "text-cyan-600 font-bold text-lg",

  cardContent:
    "flex-1 min-w-0",

  cardPatientName:
    "text-lg font-bold text-slate-800 truncate",

  cardPatientInfo:
    "text-sm text-slate-500 mt-1",

  cardDoctorInfo:
    "mt-3",

  cardDoctorName:
    "font-semibold text-cyan-600 text-sm",

  cardSpeciality:
    "text-sm text-slate-500 truncate mt-1",

  // ================= DATE + TIME =================
  dateTimeSection:
    "mt-5 flex flex-col gap-3",

  dateTimeContainer:
    "flex items-center gap-2 text-slate-700 font-semibold",

  calendarIcon:
    "w-4 h-4 text-cyan-500",

  dateText:
    "truncate",

  feeText:
    "text-sm font-bold text-violet-600",

  // ================= CONTACT + STATUS =================
  contactStatusSection:
    "mt-5 flex flex-col gap-4",

  phoneContainer:
    "flex items-center gap-2 text-sm text-slate-600",

  phoneIcon:
    "w-4 h-4 text-cyan-500",

  phoneNumber:
    "truncate",

  statusContainer:
    "flex flex-wrap items-center gap-3",

  // ================= STATUS BADGES =================
  statusBadgeBase:
    "px-4 py-1.5 rounded-full text-xs font-semibold border shadow-sm",

  statusBadgeComplete:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  statusBadgeCancelled:
    "bg-red-50 text-red-600 border-red-200",

  statusBadgeConfirmed:
    "bg-cyan-50 text-cyan-700 border-cyan-200",

  statusBadgeRescheduled:
    "bg-violet-50 text-violet-700 border-violet-200",

  statusBadgePending:
    "bg-amber-50 text-amber-700 border-amber-200 animate-pulse",

  // ================= STATUS SELECT =================
  statusSelect:
    "px-3 py-2 rounded-xl text-sm border transition-all duration-300 focus:outline-none",

  statusSelectEnabled:
    "bg-white text-slate-700 border-slate-200 hover:border-cyan-300 focus:ring-2 focus:ring-cyan-400",

  statusSelectDisabled:
    "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed",

  // ================= RESCHEDULE =================
  rescheduleContainer:
    "mt-5",

  rescheduleButton:
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",

  rescheduleButtonEnabled:
    "bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100",

  rescheduleButtonDisabled:
    "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed",

  // ================= RESCHEDULE FORM =================
  rescheduleForm:
    "flex flex-col gap-3 mt-4",

  dateInput:
    "px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  timeInput:
    "px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  rescheduleButtons:
    "flex gap-3",

  saveButton:
    "flex-1 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  cancelButton:
    "flex-1 px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-all duration-300",

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

// export const editProfilePageStyles = {
//   // Page container
//   pageContainer: "min-h-screen font-serif bg-linear-to-br from-emerald-50 via-white to-emerald-50/30 p-4 sm:p-5 md:p-6",
//   maxWidthContainer: "max-w-6xl pt-8 md:pt-10 mx-auto relative",
  
//   // Loading states
//   loadingContainer: "min-h-screen flex items-center justify-center",
//   loadingSpinner: "w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin mx-auto mb-4",
//   loadingText: "text-gray-600",
//   errorText: "text-red-600",
  
//   // Toast notifications
//   toastContainer: "fixed top-3 right-2 sm:right-4 z-50 space-y-3 max-w-xs sm:max-w-sm",
//   toastBase: "transform transition-all duration-300 ease-out rounded-r-lg shadow-lg p-3 sm:p-4 flex items-start gap-3 animate-slideIn",
//   toastSuccess: "bg-linear-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-500",
//   toastError: "bg-linear-to-r from-rose-50 to-rose-100 border-l-4 border-rose-500",
//   toastInfo: "bg-linear-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500",
//   toastIcon: "w-5 h-5 mt-0.5",
//   toastSuccessIcon: "text-emerald-600",
//   toastErrorIcon: "text-rose-600",
//   toastText: "text-sm font-medium text-gray-800",
  
//   // Main card
//   mainCard: "bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-emerald-100/50",
//   headerBackground: "relative h-24 sm:h-28 md:h-32 bg-linear-to-r from-emerald-400 to-emerald-600",
  
//   // Profile image
//   imageContainer: "absolute -bottom-16 left-1/2 transform -translate-x-1/2 md:left-8 md:transform-none",
//   imageWrapper: "relative group",
//   profileImage: "relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 md:ml-23 rounded-full object-cover border-4 border-white shadow-2xl",
//   imageEditButton: (editing) => `absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg cursor-pointer transition-transform ${!editing && "cursor-not-allowed"}`,
//   imageEditIcon: (editing) => `w-5 h-5 ${editing ? "text-emerald-600" : "text-gray-400"}`,
//   imageInput: "hidden",
  
//   // Profile content
//   profileContent: "pt-20 pb-8 px-4 sm:px-6 md:px-8",
//   profileHeader: "flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8",
//   profileInfo: "flex-1 min-w-0",
//   profileName: "text-2xl sm:text-3xl md:text-4xl font-bold bg-linear-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent truncate",
//   profileSubtitle: "text-sm sm:text-lg text-emerald-700 mt-2 flex items-center gap-2",
//   subtitleIcon: "w-4 h-4",
  
//   // Stats container
//   statsContainer: "mt-4 flex flex-wrap items-center gap-3",
//   statItem: "flex items-center gap-3 bg-white px-3 py-2 rounded-full border border-emerald-100 shadow-sm text-sm sm:text-base",
//   ratingStatItem: "flex items-center gap-3 bg-linear-to-r from-amber-50 to-amber-100 px-3 py-2 rounded-full border border-amber-200 text-sm sm:text-base",
//   feeStatItem: "flex items-center gap-1 bg-linear-to-r from-amber-50 to-amber-100 px-3 py-2 rounded-full border border-amber-200",
//   statIcon: "w-4 h-4",
//   statEmeraldIcon: "text-emerald-600",
//   statAmberIcon: (field) => {
//     if (field === 'star') return "w-5 h-5 text-amber-500 fill-amber-500";
//     return "w-4 h-4 text-amber-600";
//   },
//   statLabel: "text-xs text-emerald-600 font-medium",
//   statAmberLabel: "text-xs text-amber-700 font-medium",
//   statValue: "text-sm font-semibold text-emerald-900 truncate",
//   statAmberValue: "text-sm font-bold text-amber-800",
//   statInput: "w-20 rounded-full border px-2 py-1 text-sm focus:outline-none",
//   statPatientsInput: "w-24 rounded-full border px-2 py-1 text-sm focus:outline-none",
  
//   // Action buttons
//   actionButtons: "flex flex-col sm:flex-row items-center gap-3",
//   availabilityToggle: (isAvailable) => `flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full cursor-pointer border-2 shadow-sm transition-all duration-300 ${isAvailable ? "bg-linear-to-r from-emerald-50 to-emerald-100 border-emerald-300 hover:shadow-emerald-200" : "bg-linear-to-r from-gray-50 to-gray-100 border-gray-300 hover:shadow-gray-200"} hover:shadow-lg w-full sm:w-auto`,
//   toggleTrack: (isAvailable) => `relative w-10 h-5 rounded-full transition-colors ${isAvailable ? "bg-emerald-500" : "bg-gray-400"}`,
//   toggleThumb: (isAvailable) => `absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${isAvailable ? "left-6" : "left-0.5"}`,
//   toggleText: (isAvailable) => `font-medium ${isAvailable ? "text-emerald-700" : "text-gray-600"}`,
  
//   editButton: "group relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-2 rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] w-full sm:w-auto",
//   editButtonContent: "relative flex items-center gap-2",
  
//   // Form sections
//   formSection: "mb-8",
//   sectionTitle: "text-xl sm:text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2",
//   sectionIconContainer: "w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center",
//   sectionIcon: "w-4 h-4 text-emerald-600",
  
//   // Field grid
//   fieldGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
//   fieldGroup: "group",
//   fieldHeader: "flex items-center gap-3 mb-2",
//   fieldIconContainer: (editing) => `p-2 rounded-full ${editing ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-500"}`,
//   fieldIcon: "w-4 h-4",
//   fieldLabel: "text-sm font-semibold text-emerald-800",
  
//   // Input fields
//   inputBase: (editing) => `w-full rounded-full border-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base transition-all duration-200 ${editing ? "border-emerald-200 bg-emerald-50/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 focus:bg-white" : "border-gray-200 bg-gray-50/50 text-gray-600 cursor-not-allowed"}`,
  
//   // About textarea
//   aboutTextarea: (editing) => `w-full rounded-xl border-2 px-4 py-3 text-sm sm:text-base transition-all duration-200 ${editing ? "border-emerald-200 bg-emerald-50/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 focus:bg-white" : "border-gray-200 bg-gray-50/50 text-gray-600 cursor-not-allowed"}`,
//   aboutCharCount: "absolute bottom-3 right-3 text-xs text-gray-400",
  
//   // Schedule section
//   scheduleHeader: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
//   emptySchedule: "text-center py-10 rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-50/50",
//   emptyScheduleIcon: "w-12 h-12 text-emerald-400 mx-auto mb-3",
//   emptyScheduleText: "text-emerald-700 font-medium",
//   emptyScheduleSubtext: "text-sm text-emerald-600 mt-1",
  
//   // Schedule grid
//   scheduleGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",
  
//   // Date card
//   dateCard: "group relative bg-linear-to-br from-white to-emerald-50 p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
//   dateHeader: "flex items-center justify-between mb-3 pb-3 border-b border-emerald-100",
//   dateIconContainer: "p-2 rounded-full bg-emerald-100",
//   dateIcon: "w-5 h-5 text-emerald-600",
//   dateTitle: "font-bold text-base sm:text-lg text-emerald-900",
//   dateSubtitle: "text-xs sm:text-sm text-emerald-600",
//   dateSlotCount: "text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700",
//   dateDeleteButton: (editing) => `p-2 rounded-full cursor-pointer transition-colors ${editing ? "hover:bg-rose-50 text-rose-500 hover:text-rose-600" : "text-gray-400 cursor-not-allowed"}`,
//   dateDeleteIcon: "w-4 h-4",
  
//   // Time slots
//   timeSlotContainer: "space-y-3",
//   timeSlotItem: "flex items-center justify-between bg-white px-3 py-2 rounded-full border border-emerald-100 hover:border-emerald-200 transition-colors",
//   timeSlotIcon: "w-4 h-4 text-emerald-600",
//   timeSlotText: "font-medium text-emerald-900 text-sm sm:text-base",
//   timeSlotDeleteButton: (editing) => `p-1.5 rounded-full cursor-pointer transition-colors ${editing ? "hover:bg-rose-50 text-rose-500 hover:text-rose-600" : "text-gray-400 cursor-not-allowed"}`,
//   timeSlotDeleteIcon: "w-4 h-4",
  
//   // Add time slot
//   addSlotContainer: "pt-3 border-t border-emerald-100",
//   addSlotInput: "flex-1 rounded-full px-3 py-2 text-sm border border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200",
//   addSlotButton: "p-2 rounded-full cursor-pointer bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors",
//   addSlotIcon: "w-4 h-4",
  
//   // Save message
//   saveMessage: (type) => `px-4 py-2 rounded-lg ${type === "saving" ? "bg-blue-50 text-blue-700 border border-blue-200" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`,
  
//   // Actions section
//   actionsSection: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-emerald-100",
//   actionsText: "text-sm text-gray-500",
//   actionsButtons: "flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto",
//   resetButton: "px-6 py-3 rounded-full cursor-pointer border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 font-medium w-full sm:w-auto text-center",
//   saveButton: "group relative overflow-hidden bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-full cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto text-center",
//   saveButtonContent: "relative flex items-center gap-2 justify-center",
//   saveSpinner: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",
  
//   // AddDate component styles
//   addDateContainer: "flex items-center gap-2",
//   addDateInput: "rounded-xl px-3 py-2 border-2 border-emerald-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 text-sm sm:text-base",
//   addDateButton: "flex items-center gap-2 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base",
//   addDateIcon: "w-4 h-4",
  
//   // Custom animations
//   customCSS: `
//     @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
//     .animate-slideIn { animation: slideIn 0.3s ease-out forwards; }
//   `
// };

export const editProfilePageStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-4 sm:px-6 py-6 overflow-hidden",

  maxWidthContainer:
    "relative z-10 max-w-7xl mx-auto pt-8 md:pt-10",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= LOADING =================
  loadingContainer:
    "min-h-screen flex flex-col items-center justify-center",

  loadingSpinner:
    "w-14 h-14 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin mb-5",

  loadingText:
    "text-slate-600 font-medium",

  errorText:
    "text-red-500 font-semibold",

  // ================= TOAST =================
  toastContainer:
    "fixed top-5 right-4 z-50 space-y-3 max-w-sm",

  toastBase:
    "rounded-2xl shadow-2xl backdrop-blur-xl border p-4 flex items-start gap-3 animate-slideIn",

  toastSuccess:
    "bg-white/90 border-emerald-200",

  toastError:
    "bg-white/90 border-red-200",

  toastInfo:
    "bg-white/90 border-cyan-200",

  toastIcon:
    "w-5 h-5 mt-0.5",

  toastSuccessIcon:
    "text-emerald-500",

  toastErrorIcon:
    "text-red-500",

  toastText:
    "text-sm font-medium text-slate-700",

  // ================= MAIN CARD =================
  mainCard:
    "bg-white/80 backdrop-blur-2xl rounded-[40px] shadow-2xl overflow-hidden border border-white",

  headerBackground:
    "relative h-32 md:h-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500",

  // ================= PROFILE IMAGE =================
  imageContainer:
    "absolute -bottom-16 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0",

  imageWrapper:
    "relative group",

  profileImage:
    "w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-[6px] border-white shadow-2xl transition-transform duration-500 group-hover:scale-105",

  imageEditButton: (editing) =>
    `absolute bottom-2 right-2 p-3 rounded-full shadow-lg transition-all duration-300 ${
      editing
        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-110 cursor-pointer"
        : "bg-slate-200 text-slate-400 cursor-not-allowed"
    }`,

  imageEditIcon:
    "w-5 h-5",

  imageInput:
    "hidden",

  // ================= PROFILE CONTENT =================
  profileContent:
    "pt-24 md:pt-20 pb-8 px-5 sm:px-8 md:px-10",

  profileHeader:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10",

  profileInfo:
    "flex-1 min-w-0",

  profileName:
    "text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent truncate",

  profileSubtitle:
    "mt-3 flex items-center gap-2 text-slate-500 text-sm md:text-base",

  subtitleIcon:
    "w-4 h-4 text-cyan-500",

  // ================= STATS =================
  statsContainer:
    "mt-6 flex flex-wrap gap-4",

  statItem:
    "flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300",

  ratingStatItem:
    "flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 shadow-md",

  feeStatItem:
    "flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 shadow-md",

  statIcon:
    "w-5 h-5",

  statEmeraldIcon:
    "text-cyan-500",

  statAmberIcon: (field) => {
    if (field === "star")
      return "w-5 h-5 text-amber-500 fill-amber-500";
    return "w-5 h-5 text-amber-600";
  },

  statLabel:
    "text-xs font-medium text-slate-500",

  statAmberLabel:
    "text-xs font-medium text-amber-700",

  statValue:
    "text-sm md:text-base font-bold text-slate-700",

  statAmberValue:
    "text-sm md:text-base font-bold text-amber-700",

  statInput:
    "w-20 px-2 py-1 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  statPatientsInput:
    "w-24 px-2 py-1 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  // ================= ACTION BUTTONS =================
  actionButtons:
    "flex flex-col sm:flex-row gap-4 w-full lg:w-auto",

  availabilityToggle: (isAvailable) =>
    `flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-md transition-all duration-300 ${
      isAvailable
        ? "bg-gradient-to-r from-emerald-50 to-cyan-50 border-emerald-200"
        : "bg-slate-100 border-slate-200"
    }`,

  toggleTrack: (isAvailable) =>
    `relative w-11 h-6 rounded-full transition-all duration-300 ${
      isAvailable ? "bg-cyan-500" : "bg-slate-400"
    }`,

  toggleThumb: (isAvailable) =>
    `absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 ${
      isAvailable ? "left-5" : "left-0.5"
    }`,

  toggleText: (isAvailable) =>
    `font-semibold ${
      isAvailable ? "text-cyan-700" : "text-slate-500"
    }`,

  editButton:
    "group relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  editButtonContent:
    "relative flex items-center gap-2",

  // ================= FORM SECTION =================
  formSection:
    "mb-10",

  sectionTitle:
    "flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6",

  sectionIconContainer:
    "w-10 h-10 rounded-2xl bg-cyan-100 flex items-center justify-center",

  sectionIcon:
    "w-5 h-5 text-cyan-600",

  // ================= FIELD GRID =================
  fieldGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  fieldGroup:
    "space-y-2",

  fieldHeader:
    "flex items-center gap-3",

  fieldIconContainer: (editing) =>
    `p-2 rounded-xl ${
      editing
        ? "bg-cyan-100 text-cyan-600"
        : "bg-slate-100 text-slate-400"
    }`,

  fieldIcon:
    "w-4 h-4",

  fieldLabel:
    "text-sm font-semibold text-slate-700",

  // ================= INPUTS =================
  inputBase: (editing) =>
    `w-full px-4 py-3 rounded-2xl border text-sm md:text-base transition-all duration-300 ${
      editing
        ? "border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        : "border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed"
    }`,

  // ================= ABOUT =================
  aboutTextarea: (editing) =>
    `w-full min-h-[140px] px-4 py-3 rounded-[24px] border text-sm md:text-base transition-all duration-300 ${
      editing
        ? "border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        : "border-slate-200 bg-slate-100 text-slate-500 cursor-not-allowed"
    }`,

  aboutCharCount:
    "absolute bottom-3 right-4 text-xs text-slate-400",

  // ================= SCHEDULE =================
  scheduleHeader:
    "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",

  emptySchedule:
    "text-center py-14 rounded-[32px] border-2 border-dashed border-cyan-200 bg-cyan-50/50",

  emptyScheduleIcon:
    "w-14 h-14 text-cyan-400 mx-auto mb-4",

  emptyScheduleText:
    "text-cyan-700 font-semibold",

  emptyScheduleSubtext:
    "text-sm text-slate-500 mt-2",

  scheduleGrid:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6",

  // ================= DATE CARD =================
  dateCard:
    "bg-white border border-slate-100 rounded-[28px] shadow-md hover:shadow-2xl transition-all duration-500 p-5",

  dateHeader:
    "flex items-center justify-between mb-4 pb-4 border-b border-slate-100",

  dateIconContainer:
    "p-3 rounded-2xl bg-cyan-100",

  dateIcon:
    "w-5 h-5 text-cyan-600",

  dateTitle:
    "font-bold text-lg text-slate-800",

  dateSubtitle:
    "text-sm text-slate-500",

  dateSlotCount:
    "px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold",

  dateDeleteButton: (editing) =>
    `p-2 rounded-full transition-all duration-300 ${
      editing
        ? "hover:bg-red-50 text-red-500 cursor-pointer"
        : "text-slate-300 cursor-not-allowed"
    }`,

  dateDeleteIcon:
    "w-4 h-4",

  // ================= TIME SLOTS =================
  timeSlotContainer:
    "space-y-3",

  timeSlotItem:
    "flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100",

  timeSlotIcon:
    "w-4 h-4 text-cyan-500",

  timeSlotText:
    "font-medium text-slate-700",

  timeSlotDeleteButton: (editing) =>
    `p-1.5 rounded-full transition-all duration-300 ${
      editing
        ? "hover:bg-red-50 text-red-500 cursor-pointer"
        : "text-slate-300 cursor-not-allowed"
    }`,

  timeSlotDeleteIcon:
    "w-4 h-4",

  // ================= ADD SLOT =================
  addSlotContainer:
    "pt-4 border-t border-slate-100",

  addSlotInput:
    "flex-1 px-4 py-2.5 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400",

  addSlotButton:
    "p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300",

  addSlotIcon:
    "w-4 h-4",

  // ================= SAVE MESSAGE =================
  saveMessage: (type) =>
    `px-4 py-3 rounded-2xl border text-sm font-medium ${
      type === "saving"
        ? "bg-blue-50 text-blue-700 border-blue-200"
        : "bg-emerald-50 text-emerald-700 border-emerald-200"
    }`,

  // ================= ACTIONS =================
  actionsSection:
    "flex flex-col lg:flex-row items-center justify-between gap-5 pt-8 border-t border-slate-100",

  actionsText:
    "text-sm text-slate-500",

  actionsButtons:
    "flex flex-col sm:flex-row gap-4 w-full lg:w-auto",

  resetButton:
    "px-6 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-all duration-300",

  saveButton:
    "group relative overflow-hidden px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed",

  saveButtonContent:
    "relative flex items-center justify-center gap-2",

  saveSpinner:
    "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin",

  // ================= ADD DATE =================
  addDateContainer:
    "flex items-center gap-3 flex-wrap",

  addDateInput:
    "px-4 py-2.5 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-400",

  addDateButton:
    "flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300",

  addDateIcon:
    "w-4 h-4",

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


// DashboardPage styles
// export const dashboardStyles = {
//   // Main container
//   pageContainer: "min-h-screen font-serif pt-16 lg:pt-20 md:pt-15 p-4 sm:p-6 bg-linear-to-br from-emerald-50 to-white",
  
//   // Content wrapper
//   contentWrapper: "max-w-7xl mx-auto",
  
//   // Header section
//   headerContainer: "mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
//   headerTitle: "text-2xl pt-10 xl:pt-0 uppercase lg:pt-0 sm:text-3xl font-extrabold tracking-tight text-emerald-900",
//   headerSubtitle: "text-sm sm:text-base text-emerald-700/70",
//   headerInfo: "text-sm text-slate-600",
//   refreshButton: "text-sm px-3 py-1 rounded-full bg-white text-emerald-600 border border-emerald-200 hover:shadow-sm",
  
//   // Stats grid
//   statsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8",
  
//   // Stat card
//   statCard: "rounded-full p-4 bg-white/60 backdrop-blur-sm border border-emerald-300 shadow-sm hover:shadow-md transition-all",
//   statContent: "flex items-center justify-between gap-4",
//   statTextContainer: "flex-1",
//   statTitle: "text-sm font-medium text-emerald-800/80",
//   statValue: "mt-2 text-xl sm:text-2xl font-extrabold text-emerald-900 tracking-tight",
//   statIconContainer: "p-3 rounded-full bg-linear-to-br border shadow-md",
//   statIcon: "w-6 h-6 text-emerald-900",
  
//   // Stat card accent colors
//   accentTopEmerald: "from-emerald-200 to-emerald-300",
//   accentTopAmber: "from-amber-100 to-amber-200",
//   accentTopEmeraldLight: "from-emerald-100 to-emerald-200",
//   accentTopRose: "from-rose-100 to-rose-200",
//   accentBottomEmerald: "border-emerald-200",
//   accentBottomAmber: "border-amber-200",
//   accentBottomRose: "border-rose-200",
  
//   // Appointments container
//   appointmentsContainer: "bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-emerald-100 shadow-sm",
//   appointmentsHeader: "flex items-center justify-between mb-4",
//   appointmentsTitle: "text-lg sm:text-xl font-semibold text-emerald-900",
//   appointmentsTotal: "text-sm sm:text-base text-emerald-700 flex items-center gap-2",
//   totalIcon: "w-4 h-4",
  
//   // Cards grid
//   cardsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start",
  
//   // Appointment card
//   appointmentCard: "rounded-xl p-4 bg-white shadow-sm border border-emerald-100 flex flex-col justify-between gap-4 hover:shadow-md transition self-start",
//   cardHeader: "flex items-start gap-3",
//   cardAvatar: "w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center",
//   cardAvatarImage: "w-full h-full object-cover",
//   cardAvatarFallback: "text-emerald-700 font-bold",
//   cardContent: "flex-1",
//   cardPatientName: "text-base sm:text-lg font-bold text-emerald-900",
//   cardPatientInfo: "text-xs sm:text-sm text-emerald-700 mt-1",
//   cardDoctorInfo: "mt-2 text-sm sm:text-sm text-emerald-700",
//   cardDoctorName: "font-semibold text-emerald-900",
//   cardSpeciality: "text-xs sm:text-sm text-emerald-800 font-medium",
//   cardPhoneContainer: "mt-2 text-xs sm:text-sm text-emerald-600 flex items-center gap-2",
//   cardPhoneIcon: "w-4 h-4",
  
//   // Date and time section
//   dateTimeContainer: "flex items-center justify-between",
//   dateText: "text-sm sm:text-lg font-bold text-emerald-800",
//   timeText: "text-sm sm:text-base font-semibold text-emerald-900",
  
//   // Card footer
//   cardFooter: "flex flex-col items-end gap-2",
//   feeText: "text-sm sm:text-base text-emerald-800 font-medium",
//   statusContainer: "flex items-center gap-2",
  
//   // Show more button
//   showMoreContainer: "mt-4 flex justify-center",
//   showMoreButton: "px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition",
  
//   // Status badge (reusing listPageStyles but adding here for completeness)
//   statusBadgeBase: "px-3 py-1 rounded-full text-xs font-semibold",
//   statusBadgeComplete: "bg-emerald-100 text-emerald-800 border border-emerald-200",
//   statusBadgeCancelled: "bg-rose-100 text-rose-800 border border-rose-200",
//   statusBadgeConfirmed: "bg-emerald-200 text-emerald-900 border border-emerald-300",
//   statusBadgeRescheduled: "bg-indigo-100 text-indigo-900 border border-indigo-200",
//   statusBadgePending: "bg-yellow-100 text-amber-800 border border-amber-200 animate-pulse",
  
//   // Status select
//   statusSelect: "text-xs sm:text-sm px-3 py-1 rounded-full border focus:outline-none transition",
//   statusSelectEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
//   statusSelectDisabled: "bg-gray-50 text-gray-400 cursor-not-allowed border-gray-200",
  
//   // Reschedule button
//   rescheduleButton: "text-xs px-3 py-1 rounded-full border transition",
//   rescheduleButtonEnabled: "bg-white text-emerald-800 border-emerald-200 hover:shadow-sm",
//   rescheduleButtonDisabled: "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed",
  
//   // Reschedule form
//   rescheduleForm: "flex flex-col items-end gap-2 w-full",
//   rescheduleDateInput: "text-xs px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-48 lg:w-56",
//   rescheduleTimeInput: "text-xs px-3 py-2 rounded-full border border-emerald-200 bg-white w-full md:w-48 lg:w-56",
//   rescheduleButtons: "flex gap-2",
//   saveButton: "text-xs px-3 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition",
//   cancelButton: "text-xs px-3 py-2 rounded-full border border-emerald-200 bg-white text-emerald-800 hover:shadow-sm transition"
// };

export const dashboardStyles = {
  // ================= PAGE CONTAINER =================
  pageContainer:
    "relative min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-white to-violet-50 overflow-hidden",

  // ================= BACKGROUND EFFECTS =================
  backgroundGlow1:
    "absolute top-[-120px] left-[-80px] w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse",

  backgroundGlow2:
    "absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-violet-200 rounded-full blur-3xl opacity-30 animate-pulse",

  // ================= CONTENT WRAPPER =================
  contentWrapper:
    "relative z-10 max-w-7xl mx-auto",

  // ================= HEADER =================
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10",

  headerTitle:
    "text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 bg-clip-text text-transparent",

  headerSubtitle:
    "mt-2 text-slate-500 text-sm md:text-base",

  headerInfo:
    "text-sm text-slate-500",

  refreshButton:
    "px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 text-cyan-600 font-semibold shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300",

  // ================= STATS GRID =================
  statsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10",

  // ================= STAT CARD =================
  statCard:
    "group relative bg-white/80 backdrop-blur-2xl border border-white rounded-[32px] p-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden",

  statTopLine:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  statContent:
    "flex items-center justify-between gap-4",

  statTextContainer:
    "flex-1",

  statTitle:
    "text-sm font-semibold text-slate-500 uppercase tracking-wide",

  statValue:
    "mt-3 text-3xl font-extrabold text-slate-800 tracking-tight",

  statIconContainer:
    "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600",

  statIcon:
    "w-7 h-7 text-white",

  // ================= ACCENT COLORS =================
  accentTopEmerald:
    "from-cyan-400 to-blue-500",

  accentTopAmber:
    "from-amber-400 to-yellow-500",

  accentTopEmeraldLight:
    "from-cyan-300 to-cyan-500",

  accentTopRose:
    "from-rose-400 to-pink-500",

  accentBottomEmerald:
    "border-cyan-100",

  accentBottomAmber:
    "border-amber-100",

  accentBottomRose:
    "border-rose-100",

  // ================= APPOINTMENTS CONTAINER =================
  appointmentsContainer:
    "bg-white/80 backdrop-blur-2xl border border-white rounded-[36px] p-6 shadow-2xl",

  appointmentsHeader:
    "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8",

  appointmentsTitle:
    "text-2xl font-bold text-slate-800",

  appointmentsTotal:
    "flex items-center gap-2 text-cyan-600 font-semibold",

  totalIcon:
    "w-5 h-5",

  // ================= CARDS GRID =================
  cardsGrid:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",

  // ================= APPOINTMENT CARD =================
  appointmentCard:
    "group relative bg-white border border-slate-100 rounded-[28px] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-5 overflow-hidden",

  cardTopLine:
    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",

  cardHeader:
    "flex items-start gap-4",

  cardAvatar:
    "w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100 flex items-center justify-center",

  cardAvatarImage:
    "w-full h-full object-cover",

  cardAvatarFallback:
    "text-cyan-600 font-bold text-lg",

  cardContent:
    "flex-1 min-w-0",

  cardPatientName:
    "text-lg font-bold text-slate-800 truncate",

  cardPatientInfo:
    "text-sm text-slate-500 mt-1",

  cardDoctorInfo:
    "mt-3",

  cardDoctorName:
    "font-semibold text-cyan-600 text-sm",

  cardSpeciality:
    "text-sm text-slate-500 mt-1",

  cardPhoneContainer:
    "mt-3 flex items-center gap-2 text-sm text-slate-500",

  cardPhoneIcon:
    "w-4 h-4 text-cyan-500",

  // ================= DATE + TIME =================
  dateTimeContainer:
    "mt-5 flex items-center justify-between",

  dateText:
    "text-base font-bold text-slate-700",

  timeText:
    "text-sm font-semibold text-cyan-600",

  // ================= CARD FOOTER =================
  cardFooter:
    "mt-5 flex flex-col gap-4",

  feeText:
    "text-sm font-bold text-violet-600",

  statusContainer:
    "flex flex-wrap items-center gap-3",

  // ================= SHOW MORE =================
  showMoreContainer:
    "mt-8 flex justify-center",

  showMoreButton:
    "px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  // ================= STATUS BADGES =================
  statusBadgeBase:
    "px-4 py-1.5 rounded-full text-xs font-semibold border shadow-sm",

  statusBadgeComplete:
    "bg-emerald-50 text-emerald-700 border-emerald-200",

  statusBadgeCancelled:
    "bg-red-50 text-red-600 border-red-200",

  statusBadgeConfirmed:
    "bg-cyan-50 text-cyan-700 border-cyan-200",

  statusBadgeRescheduled:
    "bg-violet-50 text-violet-700 border-violet-200",

  statusBadgePending:
    "bg-amber-50 text-amber-700 border-amber-200 animate-pulse",

  // ================= STATUS SELECT =================
  statusSelect:
    "px-3 py-2 rounded-xl text-sm border transition-all duration-300 focus:outline-none",

  statusSelectEnabled:
    "bg-white text-slate-700 border-slate-200 hover:border-cyan-300 focus:ring-2 focus:ring-cyan-400",

  statusSelectDisabled:
    "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed",

  // ================= RESCHEDULE BUTTON =================
  rescheduleButton:
    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",

  rescheduleButtonEnabled:
    "bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100",

  rescheduleButtonDisabled:
    "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed",

  // ================= RESCHEDULE FORM =================
  rescheduleForm:
    "flex flex-col gap-3 mt-4",

  rescheduleDateInput:
    "px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  rescheduleTimeInput:
    "px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400",

  rescheduleButtons:
    "flex gap-3",

  saveButton:
    "flex-1 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-200 hover:-translate-y-1 transition-all duration-300",

  cancelButton:
    "flex-1 px-4 py-2.5 rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-all duration-300",

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