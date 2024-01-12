import React from 'react'
import NavNo2 from '../../components/navNo2'
import RankingLeft from '../../components/RankingLeft'
import RankingRight from '../../components/RankingRight'
const Ranking = () => {
  return (
    <div id="ranking">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <NavNo2/>
                </div>
                <div className="col-xl-6">
                    <RankingLeft/>
                </div>
                <div className="col-xl-6">
                    <RankingRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ranking