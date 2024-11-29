'use client'

import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Andrew} from "@/components/andrew";
import {Text} from "@/components/text";
import {useEffect, useState} from "react";
import {fetchMission} from "@/app/lib/data";
import {Input} from "@/components/input";
import {Button} from "@/components/button";

export default function Page() {
    const [mission, setMission] = useState(null)

    useEffect(() => {
        fetchMission()
            .then((mission) => {
                setMission(mission)
            })
    }, [])

    if (!mission)
        return (<Heading>Loading ...</Heading>)
    if (!mission.isAllowed(3))
        return (<Heading>Finish all previous missions first!</Heading>)
    return (
        <>
            <Heading>Mission 3 - Chillout</Heading>
            <Divider className="my-10 mt-6"></Divider>
            <Andrew>
                <p>Jak to było napisane na płocie, należy się drink po robocie!</p>
                <p>Potrzebuję chwilę na przeanalizowanie dostarczonych przez Ciebie danych wywiadowczych.</p>
                <p>Twoje zadanie na teraz to wypicie drineczka i szota, zajrzyj tu kiedy je wypełnisz!</p>
            </Andrew>
            <Divider className="my-10" soft></Divider>
            {
                mission.isAllowed(4) && <>
                    <Andrew>
                        <p>Analiza zakończona! Udało mi się odkryć dane personalne obcego agenta!</p>
                    </Andrew>
                    <div className="flex justify-end gap-4">
                        <Button href="mission4">Kontynuuj</Button>
                    </div>
                </>
            }
        </>
    );
}