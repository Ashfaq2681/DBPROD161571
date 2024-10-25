import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./CustomHooks/useAuthContext";
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
const Psds = lazy(() => import("./Components/ExploreList/Psds"))
const Photos = lazy(() => import("./Components/ExploreList/Photos"))
const Mockups = lazy(() => import("./Components/ExploreList/Mockups"))
const SocialMedia = lazy(() => import("./Components/ExploreList/SocialMedia"))
const Vectors = lazy(() => import("./Components/ExploreList/Vectors"))
const StockPhotos = lazy(() => import("./Components/Resources/StockPhotos"))
const Editorial = lazy(() => import("./Components/Resources/Editorial"))
const Featured = lazy(() => import("./Components/Resources/Featured"))
const Premium = lazy(() => import("./Components/Resources/Premium"))
const Trending = lazy(() => import("./Components/Resources/Trending"))
const Success = lazy(() => import("./Components/paymentSessionPages/Success"))
const Cancel = lazy(() => import("./Components/paymentSessionPages/Cancel"))
const SearchResult = lazy(() => import("./Components/SearchResult"))
const CustomChatBot = lazy(() => import("./Components/ChatBot/ChatBot"))

const App = () => {

  const { user } = useAuthContext()

  return (
    <div className="h-lvh">
      <BrowserRouter>
        <Header />
        <hr />
        <Suspense>
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
          <Route path="/psds" element={<><ScrollToTop/><Psds/></>}/>
          <Route path="/photos" element={<><ScrollToTop/><Photos/></>}/>
          <Route path="/mockups" element={<><ScrollToTop/><Mockups/></>}/>
          <Route path="/socialmedia" element={<><ScrollToTop/><SocialMedia/></>}/>
          <Route path="/vectors" element={<><ScrollToTop/><Vectors/></>}/>
          <Route path="/stockphotos" element={<><ScrollToTop/><StockPhotos/></>}/>
          <Route path="/editorial" element={<><ScrollToTop/><Editorial/></>}/>
          <Route path="/featured" element={<><ScrollToTop/><Featured/></>}/>
          <Route path="/premium" element={<><ScrollToTop/><Premium/></>}/>
          <Route path="/trending" element={<><ScrollToTop/><Trending/></>}/>
          <Route path="/success" element={<><ScrollToTop/><Success/></>}/>
          <Route path="/cancel" element={<><ScrollToTop/><Cancel/></>}/>
          <Route path="/searchResult" element={<><ScrollToTop/><SearchResult/></>}/>
        </Routes>
        <Footer/>
        <div className="bottom-0 right-0 px-5 pb-5 z-auto float-end fixed overflow-hidden"><CustomChatBot/></div>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
