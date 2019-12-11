import React, {SFC} from 'react';
import Container from '../../ui/Container/Container';
import {persons} from '../../assets/images'
import Item from '../../ui/Item/Item';
import ClientOpinion from './ClientOpinion/ClientOpinion';
import styles from './ClientOpinions.module.scss'

const peopleReviews = [
    {id: 1, name: 'Esteban Quito', text: '"No pues I\'m very happy with my product y ps lorem ipsum dolor"'},
    {id: 2, name: 'Paty Nava', text:'"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque"'},
    {id: 3, name: 'Peren Gano', text:'"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?"'}
];

const ClientOpinions: SFC = () => {

    const reviews = peopleReviews.map((v, k) => {
        return (
            <Item key={v.id} xs={12} md={3} >
                <ClientOpinion 
                    avatar={persons[v.id - 1].src} 
                    sign={v.name}
                    >{v.text}
                </ClientOpinion>
            </Item>
        );
    });

    return (
        <Container justify='space-around' spacing={3} alignItems='stretch' direction='row' className={styles.Container}>
            {reviews}
        </Container>
    );
}

export default ClientOpinions;