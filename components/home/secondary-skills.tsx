import styles from './secondary-skills.module.scss';

const skills = [
    {
        name: 'RabbitMQ',
        category: 'Async Messaging',
    },
    {
        name: 'React',
        category: 'Front-end',
    },
    {
        name: 'Angular',
        category: 'Front-end',
    },
    {
        name: 'CSS',
        category: 'Front-end',
    },
    {
        name: 'GitLab CI',
        category: 'DevOps',
    },
];

export default function SecondarySkills() {
    return <div className={ `container ${ styles.wrapper }` }>
        <div className={ styles.intro }>Mes compétences secondaires</div>

        <ul className={ styles.skillsList }>
            { skills.map(skill => <li key={ skill.name }>
                <div className={ styles.skillName }>{ skill.name }</div>
                <div className={ styles.skillCategory }>{ skill.category }</div>
            </li>) }
        </ul>
    </div>
}
