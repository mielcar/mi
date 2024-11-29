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
    if (!mission.isAllowed(4))
        return (<Heading>Finish all previous missions first!</Heading>)
    return (
        <>
            <Heading>Mission 4 - Final encounter</Heading>
            <Divider className="my-10 mt-6"></Divider>
            <Andrew>
                <p>Teraz nadszedł czas na sprawdzenie WSZYSTKICH Twoich umiejętności zdobytych na tajnych szkoleniach.</p>
                <p>Znamy jedynie pseudonimy obcego agenta: Maniek, Irka, Gawędziara</p>
                <p>Odszyfrowaliśmy też jakiś numer: 204.</p>
                <p>Musisz ją odnaleźć i zrobić cokolwiek będzie konieczne!</p>
                <p>Pamiętaj, losy Larnaci zależą od Ciebie!</p>
            </Andrew>
        </>
    );
}