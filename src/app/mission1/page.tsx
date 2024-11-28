'use client'

import {Heading, Subheading} from "@/components/heading";
import {Divider} from "@/components/divider";
import {Andrew} from "@/components/andrew";
import {Text} from "@/components/text";
import {Input} from "@/components/input";
import {ChangeEvent, useEffect, useState} from "react";
import {checkMission1, fetchMission} from "@/app/lib/data";
import {Button} from "@/components/button";

export default function Page() {
    const [key, setKey] = useState('');
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
    if (!mission.isAllowed(1))
        return (<Heading>Finish all previous missions first!</Heading>)

    function changeKey(e: ChangeEvent<HTMLInputElement>) {
        setKey(e.target.value);
    }

    function onKeyCheck() {
        checkMission1(key).then(result => {
            if (!result.isAllowed(2)) {
                setWrongPass(true);
            }
            setMission(result);
        });
    }

    return (<>
            <Heading>Mission 1 - Old but gold</Heading>
            <Divider className="my-10 mt-6"></Divider>
            <Andrew>
                <p>Twoim pierwszym zadaniem będzie odzyskanie tajnego hasła do mapy.</p>
                <p>Twój poprzednik był tajniakiem tak długo, że zapomniał iż jest tajniakiem i uwierzył, że jest zwykłym
                    Cypryjskim sklepikarzem.</p>
                <p>Zanim mu odbiło, zdobył tajny klucz szyfrujący i ukrył go gdzieś gdzie 'pachnie jak w domu'.</p>
                <p>Pseudonim tajniaka: 'Staruch'. Cel: klucz szyfrujący. Miejsce: 'kupa cebuli'.</p>
            </Andrew>
            <Divider className="my-10" soft></Divider>
            {!mission.isAllowed(2) &&
                <>
                    <form className="mx-auto max-w-4xl">
                        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="space-y-1">
                                <Subheading>Klucz szyfrujący mapy</Subheading>
                                <Text>Wpisz tutaj odzyskany klucz szyfrujący.</Text>
                            </div>
                            <div>
                                <Input aria-label="Klucz Szyfrujący" name="key" defaultValue="" onChange={changeKey}/>
                                {wrongPass && <div id="region-error" aria-live="polite" aria-atomic="true">
                                    <p className="mt-2 text-sm text-red-500">
                                        Błędny klucz!
                                    </p>
                                </div>}
                            </div>
                        </section>
                    </form>
                    <Divider className="my-10" soft></Divider>
                    <div className="flex justify-end gap-4">
                        <Button onClick={onKeyCheck}>Weryfikuj klucz</Button>
                    </div>
                </>
            }
            {mission.isAllowed(2) &&
                <>
                    <Andrew>
                        <p>Świetna robota tajniaku!</p>
                    </Andrew>
                    <div className="flex justify-end gap-4">
                        <Button href="mission2">Kontynuuj</Button>
                    </div>
                </>
            }
        </>
    );
}