import { skillData } from '../data/skillsData';

const Skills = () => {
    return (
        <section className="bg-black flex flex-col justify-center items-center py-12 px-4">
            <h2 className="text-white text-5xl font-normal mb-12">Skill</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {skillData.map((item, index) => (
                    <div key={index} className="border border-gray-700 rounded-xl p-6 bg-[#0f0f0f]">
                        <h3 className="text-white text-xl font-semibold mb-4">{item.title}</h3>
                        <ul className="grid grid-cols-2 gap-4">
                            {item.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                    <img
                                        src={skill.logo}
                                        alt={skill.name}
                                        className="w-6 h-6 object-contain"
                                        onError={(e) => e.currentTarget.style.display = 'none'}
                                    />
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
