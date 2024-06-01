import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./CustomHooks/useAuthContext";
import Loading from "./Components/Loading";
import ScrollToTop from "./Components/ScrollTop";
import Header from "./Components/Header";
const Brand = lazy(() => import("./Components/Earn/Brand"))
const Shop = lazy(() => import("./Components/Earn/Shop"))
const Affiliate = lazy(() => import("./Components/Earn/Affiliate"))
const Legal = lazy(() => import("./Components/Legal/Legal"))
const Contact = lazy(() => import("./Components/company/Contact"))
const Coupons = lazy(() => import("./Components/company/Coupons"))
const About = lazy(() => import("./Components/company/About"))
const Pricing = lazy(() => import("./Components/company/Pricing"))
const Footer = lazy(() => import("./Components/Footer"))
const Hero = lazy(() => import("./Components/Hero"))
const ImageGrid = lazy(() => import("./Components/ImageGrid"))
const Login = lazy(() => import("./Components/Login"))
const Signup = lazy(() => import("./Components/Signup"))
const Dashboard = lazy(() => import("./Components/Dashboard"))
const ImageDownload = lazy(() => import("./Components/ImageDownload"))
const Blog = lazy(() => import("./Components/Blog"))
const BlogSinglePage = lazy(() => import("./Components/BlogSinglePage"))
const Enterprise = lazy(() => import("./Components/Packages/Enterprise"))
const Agency = lazy(() => import("./Components/Packages/Agency"))
const Investor = lazy(() => import("./Components/More/Investor"))
const FeaturedP = lazy(() => import("./Components/More/FeaturedP"))
const Licence = lazy(() => import("./Components/support/Licence"))
const HelpCenter = lazy(() => import("./Components/support/HelpCenter"))

const App = () => {

  const { user } = useAuthContext()

  return (
    <div className="h-lvh">
      <BrowserRouter>
        <Header />
        <hr />
        <Suspense fallback={<Loading/>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                  <Hero />
                  <ImageGrid/>
              </>
            }
          />
          <Route path="/login" element={user ? <Navigate to="/"/> : <><ScrollToTop/><Login/></>} />
          <Route path="/signup" element={user ? <Navigate to="/"/> : <><ScrollToTop/><Signup/></>} />
          <Route path="/admin" element={!user ? <Navigate to="/"/> : <><ScrollToTop/><Dashboard/></>} />
          <Route path="/imagedownload" element={<><ScrollToTop/><ImageDownload/></>}/>
          <Route path="/blog" element={<><ScrollToTop/><Blog/></>}/>
          <Route path="/blogsinglepage" element={<><ScrollToTop/><BlogSinglePage/></>}/>
          <Route path="/about" element={<><ScrollToTop/><About/></>}/>
          <Route path="/pricing" element={<><ScrollToTop/><Pricing/></>}/>
          <Route path="/coupons" element={<><ScrollToTop/><Coupons/></>}/>
          <Route path="/contact" element={<><ScrollToTop/><Contact/></>}/>
          <Route path="/legal" element={<><ScrollToTop/><Legal/></>}/>
          <Route path="/affiliate" element={<><ScrollToTop/><Affiliate/></>}/>
          <Route path="/shop" element={<><ScrollToTop/><Shop/></>}/>
          <Route path="/brand" element={<><ScrollToTop/><Brand/></>}/>
          <Route path="/enterprise" element={<><ScrollToTop/><Enterprise/></>}/>
          <Route path="/agency" element={<><ScrollToTop/><Agency/></>}/>
          <Route path="/investor" element={<><ScrollToTop/><Investor/></>}/>
          <Route path="/featuredP" element={<><ScrollToTop/><FeaturedP/></>}/>
          <Route path="/licence" element={<><ScrollToTop/><Licence/></>}/>
          <Route path="/helpcenter" element={<><ScrollToTop/><HelpCenter/></>}/>
        </Routes>
        <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
