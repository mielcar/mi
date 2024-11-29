'use client'

import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Andrew} from "@/components/andrew";
import {Text} from "@/components/text";
import {ChangeEvent, useEffect, useState} from "react";
import {checkMission2, fetchMission} from "@/app/lib/data";
import {Input} from "@/components/input";
import {Button} from "@/components/button";

export default function Page() {
    const [answer, setAnswer] = useState('');
    const [wrongPass, setWrongPass] = useState(false);
    const [mission, setMission] = useState(null)

    useEffect(() => {
        fetchMission()
            .then((mission) => {
                setMission(mission)
            })
    }, [])

    if (!mission)
        return (<Heading>Loading ...</Heading>)
    if (!mission.isAllowed(2))
        return (<Heading>Finish all previous missions first!</Heading>)

    function handleAnswerChange(e: ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    function handleAnswerCheck() {
        checkMission2(answer).then(result => {
            if (!result.isAllowed(3)) {
                setWrongPass(true);
            }
            setMission(result);
        });
    }

    return (
        <>
            <Heading>Mission 2 - Crossroads</Heading>
            <Divider className="my-10 mt-6"></Divider>
            <Andrew>
                <p>Świetna robota tajniaku!</p>
                <p>Teraz będziesz miała trudniejsze zadanie, bo trzeba będzie chodzić. (brrrr)</p>
                <p>Musisz przechwycić przesyłkę zaznaczoną na mapie.</p>
                <p>Nasz kontakt twierdzi, że znajduje się ona down under (cokolwiek to nie znaczy).</p>
            </Andrew>
            <Divider className="my-10" soft></Divider>
            <a href="https://maps.app.goo.gl/veu2E6mx3HLxMwCe7" target="_blank">Tajna Mapa (Click)</a>
            <Divider className="my-10" soft></Divider>
            {!mission.isAllowed(3) &&
                <>
                    <form className="mx-auto max-w-4xl">
                        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="space-y-1">
                                <Subheading>Dane przesyłki</Subheading>
                                <Text>Wpisz tutaj dane z przechwyconej przesyłki.</Text>
                            </div>
                            <div>
                                <Input aria-label="Dane przesyłki" name="key" defaultValue=""
                                       onChange={handleAnswerChange}/>
                                {wrongPass && <div id="region-error" aria-live="polite" aria-atomic="true">
                                    <p className="mt-2 text-sm text-red-500">
                                        Błędne dane!
                                    </p>
                                </div>}
                            </div>
                        </section>
                    </form>
                    <Divider className="my-10" soft></Divider>
                    <div className="flex justify-end gap-4">
                        <Button onClick={handleAnswerCheck}>Weryfikuj dane</Button>
                    </div>
                </>
            }
            {
                mission.isAllowed(3) && <>
                    <Andrew>
                        <p>Wspaniale Fremulonie, właśnie o te dane mi chodziło!</p>
                        <p>Łel dan, jak to mówią w obcych krajach.</p>
                    </Andrew>
                    <div className="flex justify-end gap-4">
                        <Button href="mission3">Kontynuuj</Button>
                    </div>
                </>
            }
        </>
    );
}