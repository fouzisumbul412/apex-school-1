import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { lazy, Suspense } from "react";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loaded pages
const OurSchool = lazy(() => import("./pages/about/OurSchool"));
const MissionVision = lazy(() => import("./pages/about/MissionVision"));
const PrincipalMessage = lazy(() => import("./pages/about/PrincipalMessage"));
const ChairmanMessage = lazy(() => import("./pages/about/ChairmanMessage"));
const DirectorMessage = lazy(() => import("./pages/about/DirectorMessage"));
const ViceChairmanMessage = lazy(() => import("./pages/about/ViceChairmanMessage"));
const AboutSociety = lazy(() => import("./pages/about/AboutSociety"));
const VES = lazy(() => import("./pages/about/VES"));
const ManagementCommittee = lazy(() => import("./pages/about/ManagementCommittee"));

const PrePrimary = lazy(() => import("./pages/academics/PrePrimary"));
const MiddleSecondary = lazy(() => import("./pages/academics/MiddleSecondary"));
const SeniorSecondary = lazy(() => import("./pages/academics/SeniorSecondary"));
const StudentCare = lazy(() => import("./pages/academics/StudentCare"));
const Faculty = lazy(() => import("./pages/academics/Faculty"));

const AdmissionProcess = lazy(() => import("./pages/admissions/AdmissionProcess"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* About Us */}
              <Route path="/our-school" element={<OurSchool />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/principal-message" element={<PrincipalMessage />} />
              <Route path="/chairman-message" element={<ChairmanMessage />} />
              <Route path="/director-message" element={<DirectorMessage />} />
              <Route path="/vice-chairmans-message" element={<ViceChairmanMessage />} />
              <Route path="/about-society" element={<AboutSociety />} />
              <Route path="/ves" element={<VES />} />
              <Route path="/management-committee" element={<ManagementCommittee />} />

              {/* Academics */}
              <Route path="/curriculum/pre-primary" element={<PrePrimary />} />
              <Route path="/curriculum/middle-secondary" element={<MiddleSecondary />} />
              <Route path="/curriculum/senior-secondary" element={<SeniorSecondary />} />
              <Route path="/student-care" element={<StudentCare />} />
              <Route path="/faculty" element={<Faculty />} />

              {/* Admissions */}
              <Route path="/admission-process" element={<AdmissionProcess />} />

              {/* Contact */}
              <Route path="/contact-us" element={<ContactUs />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
