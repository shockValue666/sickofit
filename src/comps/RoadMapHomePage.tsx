// import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import {roadmapElements} from "./roadmap.json";
import React from 'react'

function RoadMapHomePage() {

        return (<div style={{paddingBottom:"7%"}} >
            {/* <h1 style={{paddingLeft:"5%"}} >roadmap</h1>
            <VerticalTimeline>
                {roadmapElements.map(el=>{
                    let isWorkIcon = el.icon === "work";
                    let showButton
                    return (
                        <VerticalTimelineElement
                            key={el.id}
                            date={el.date}
                            dateClassName="date"
                            // iconStyle={
                            //     isWorkIcon? workIconStyles : schoolIconStyles
                            // }
                            // icon = {AccessibleForwardIcon}
                        >

                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline> */}
            roadmap
        </div>);
}

export default RoadMapHomePage

