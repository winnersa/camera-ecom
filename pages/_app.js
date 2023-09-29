import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/animated-circle.css';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/fontawesome-all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../public/assets/css/main.css';
import 'react-modal-video/scss/modal-video.scss';
import Context from '../context/context';
import { QueryClient, QueryClientProvider } from 'react-query';
import Nossr from '../components/nossr/nossr';


const queryClient = new QueryClient()

export default function App({ Component, pageProps, props }) {
  
  return <>
   <QueryClientProvider client={queryClient}>
    <Nossr>
        <Context>
            <Component {...pageProps} />
        </Context>
        </Nossr>
    </QueryClientProvider>
  </>
}