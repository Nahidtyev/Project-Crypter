import React, { useEffect, useState } from 'react'
import NavNo2 from '../../../components/navNo2'
import { useParams } from 'react-router-dom';
import { client } from '../../../service/service';
import HelpcatLeft from '../../../components/helpCatLeft';
import HelpCatRight from '../../../components/helpCatRight';

const HelpCategory = () => {
    const {helpId} = useParams();
    const [help, setHelp] = useState('');
    useEffect(() => {
        client.fetch(`*[_type == "helpcenter" && _id == "${helpId}"]`)
        .then((res) => {
            console.log(res);
            if (res && res.length > 0) {
            setHelp([res[0]]);
            console.log();
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [helpId]);
  return (
    <div id="help-category">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <NavNo2/>
                </div>
                <div className="col-xl-6">
                    {help&&help.map((data,index)=>(
                        <HelpcatLeft
                            key={data.index}
                            text={data.text}
                            image={data.image}
                        />
                      ))}
                </div>
                <div className="col-xl-6">
                    <HelpCatRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpCategory