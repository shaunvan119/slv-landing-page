import './B2Bpage.css'
import Header from '../Header/Header'
import TopMainB2b from './TopmainB2bSection/TopMainB2b'
import B2bprice from './B2Bpage/B2bprice'
import FooterB2b from './FooterB2b/FooterB2b'



function B2BhomePage() {
    
    return (
        <div>
            <Header/>
            <TopMainB2b/>
            <B2bprice/>
            <FooterB2b/>
           
        </div>
    )
}

export default B2BhomePage