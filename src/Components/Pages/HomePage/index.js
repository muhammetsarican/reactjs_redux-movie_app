import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ActorCard from "./ActorCard"

export class HomePage extends Component {
    state = {
        actors: [
            {
                name: "Gal Gadot",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQy8Xx0bzkXOdq1Cq6VSmyefFsGooZb8sVaQ&usqp=CAU",
                about: "Gal Gadot-Varsano is an Israeli actress and model. She was crowned Miss Israel 2004 and represented her country at the Miss Universe 2004 pageant."
            },
            {
                name: "Robert Downey Jr.",
                photoUrl: "data:image/jpeg;base64,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",
                about: "Robert John Downey Jr. is an American actor. His career has been characterized by critical success in his youth, followed by a period of substance abuse and legal troubles, and a surge in popular and commercial success later in his career."
            },
            {
                name: "Elizabeth Olsen",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Gf9axUpU4qa1kZRT3qhNdA8Hkxt2MLnzcw&usqp=CAU",
                about: "Elizabeth Chase Olsen is an American actress. Born in Sherman Oaks, California, Olsen began acting at age four."
            },
            {
                name: "Scarlett Johansson",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbs7mlssg1tbqRSsl0Fmy49OpV3iPJW6kJw&usqp=CAU",
                about: "Scarlett Ingrid Johansson is an American actress. The world's highest-paid actress in 2018 and 2019, she has featured multiple times on the Forbes Celebrity 100 list. Time named her one of the 100 most influential people in the world in 2021. "
            },
            {
                name: "Emma Stone",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnudYnhAIO4YixBUgCfdoW0PL8Xufv4KvVIw&usqp=CAU",
                about: "Emily Jean \"Emma\" Stone is an American actress and producer. She is the recipient of various accolades, including an Academy Award, a British Academy Film Award, and a Golden Globe Award."
            },
            {
                name: "Ceyda Kasabalı",
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQvtlaPi8bWl9meLzY81JEGB54TPtVss7pQ&usqp=CAU",
                about: "Born in Istanbul in 1987, Ceyda Koşulı graduated from Kocaeli University, Faculty of Fine Arts, Department of Theatre. The actor, who is 1.68 tall, started his career in 2011 with the TV series Baba Sağolsun. She took part in TV series such as Avrupa Avrupa, Snakes' Revenge, Yunus Emre Aşkın Yolculuğu."
            },
        ]
    }
    render() {
        return (
            <div>
                <h2>Actors & Actresses</h2>
                <Grid stackable columns={3}>
                    {
                        this.state.actors.map((actor, key) =>
                            <ActorCard key={key} actor={actor} />
                        )
                    }
                </Grid>
            </div>
        )
    }
}

export default HomePage