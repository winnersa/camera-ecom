import React from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1'
import TeamGrid from '../components/team/team-grid'
import { useQuery } from 'react-query';

const Team = (props) => {
  const { data:teams } = useQuery({
    queryFn: getTeam,
    initialData: props,
  })
  return (
    <React.Fragment>
        <HeaderOne/>
        <Seo title={"Team"} />
        <BreadCrumbOne title={"Team"}/>
        <main>
          <TeamGrid teamdata={teams} />
        </main>
        <FooterOne/>
    </React.Fragment>
  )
}
const getTeam = async () => {
  const teamdata = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/teamlist`);
  return await teamdata.json()
}
export const getServerSideProps = async (context) => {
  return {
    props: await getTeam()
  }
}



export default Team