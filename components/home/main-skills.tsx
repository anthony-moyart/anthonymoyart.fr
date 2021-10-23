import styles from './main-skills.module.scss';

interface Skill {
    title: string;
    skills: {
        name: string;
        subSkills?: string[];
    }[];
}

function SkillCard(props: { skill: Skill }) {
    const { skill } = props;

    return <div className={styles.skillCard}>
        <div className={styles.title}>
            {skill.title}
        </div>

        <ul className={styles.skillsList}>
            { skill.skills.map(it => <li key={ it.name }>
                { it.name }

                { it.subSkills ? <ul className={ styles.subSkillsList }>
                    { it.subSkills.map(subSkill => <li key={ subSkill }>
                        { subSkill }
                    </li>) }
                </ul> : <></> }
            </li>) }
        </ul>
    </div>
}

const skills: Skill[] = [
    {
        title: 'PHP',
        skills: [
            {
                name: 'Symfony',
                subSkills: ['REST', 'Security', 'Commandes', 'Séurité', 'JWT', 'Router', 'DI / autowire'],
            },
            {
                name: 'Tests',
                subSkills: ['PHP Unit', 'TDD', 'Behat'],
            },
            {
                name: 'Composer',
            },
        ],
    },
    {
        title: 'Kotlin',
        skills: [
            {
                name: 'Ktor',
                subSkills: ['REST', 'Authentification', 'JWT', 'Sérialisation (Kotlinx)', 'Asynchrone', 'Koin (DI)']
            },
            {
                name: 'Coroutines',
                subSkills: ['Flow', 'KMongo'],
            },
            {
                name: 'Immutabilité',
            },
            {
                name: 'Tests',
                subSkills: ['JUnit', 'Cucumber'],
            },
        ],
    },
    {
        title: 'Autres',
        skills: [
            {
                name: 'MongoDB',
                subSkills: ['Split de données sur plusieurs collections', 'Indexes', 'Aggregates', 'Partial updates'],
            },
            {
                name: 'Git',
                subSkills: ['Feature branches', 'Merge/Pull Requests', 'Rebase', 'Tags', 'GitFlow']
            },
            {
                name: 'Revue de code',
            },
            {
                name: 'IntelliJ / PhpStorm',
            },
        ],
    },
];

export default function MainSkills() {

    return <div className="dark-bg">
        <div className={`${styles.wrapper} container`}>
            <div className={styles.intro}>Mes compétences princpales</div>

            <div className="three-col-grid">
                { skills.map(skill => <SkillCard skill={skill} key={skill.title} />) }
            </div>
        </div>
    </div>;
}
