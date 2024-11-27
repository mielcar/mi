'use client'

import {Heading, Subheading} from "@/components/heading";
import {Text} from "@/components/text";
import {Input} from "@/components/input";
import {Divider} from "@/components/divider";
import {Button} from "@/components/button";
import {ChangeEvent, useEffect, useState} from "react";
import {authenticate, fetchMission} from "@/app/lib/data";
import {Andrew} from "@/components/andrew";

export default function Home() {
    const [password, setPassword] = useState('');
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

    function changePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function onPasswordCheck() {
        authenticate(password).then(result => {
            if (result.isAuthenticated()) {
                setWrongPass(false);
                setMission(result);
            } else {
                setWrongPass(true);
            }
        });
    }

    return (
        <>
            <Heading>Briefing</Heading>
            <Divider className="my-10 mt-6"></Divider>
            <Andrew>
                <p>Czołem Tajniaku Doma, to ja Andrzej Duda, pierwszy, najważniejszy i najodważniejszy obywatel
                    RP.</p>
                <p>Mam dla Ciebie super tajną misję której tylko Ty możesz sprostać.</p>
                <p>Zanim przejdziemy do szczegółów muszę upewnić się, że Ty to Ty a nie kto inny.</p>
                <p>Gdzieś na Twoim balkonie została ukryta teka z tajnym hasłem.</p>
            </Andrew>
            <Divider className="my-10" soft></Divider>
            {!mission._isAuthenticated && <form className="mx-auto max-w-4xl">
                <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="space-y-1">
                        <Subheading>Tajne Hasło</Subheading>
                        <Text>Wpisz tutaj tajne hasło. Uważaj, teka ulegnie samozniszczeniu.</Text>
                    </div>
                    <div>
                        <Input aria-label="Tajne Hasło" name="password" defaultValue="" onChange={changePassword}/>
                        {wrongPass && <div id="region-error" aria-live="polite" aria-atomic="true">
                            <p className="mt-2 text-sm text-red-500">
                                Błędne hasło!
                            </p>
                        </div>}
                    </div>
                </section>
                <Divider className="my-10" soft></Divider>
                <div className="flex justify-end gap-4">
                    <Button onClick={onPasswordCheck}>Weryfikuj Hasło</Button>
                </div>
            </form>}
            {mission._isAuthenticated && <>
                <Andrew>
                    <p>asdasd</p>
                </Andrew>
                <div className="flex justify-end gap-4">
                    <Button href="/mission1">Kontynuuj</Button>
                </div>
            </>}
        </>
    );
}
