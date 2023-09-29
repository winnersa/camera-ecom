import React from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1'
import Service from '../components/services/service'
import { useQuery } from 'react-query';


const ServicesOne = (props) => {
  const { data:servicelist } = useQuery({
    queryFn: getServices,
    initialData: props,
  })
  return (
    <React.Fragment>
      <HeaderOne />
      <Seo title={"Service"} />
      <BreadCrumbOne title={"Service"} />
      <main>
        <Service servicedata={servicelist} countStart={2} countEnd={11} bgLight={false} />
      </main>
      <FooterOne />
    </React.Fragment>
  )
}
const getServices = async () => {
  const servicdata = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/servicelist`);
  return await servicdata.json()
}
export const getServerSideProps = async (context) => {
  return {
    props:  await getServices()
  }
}



export default ServicesOne