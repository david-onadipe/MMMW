import TeamCards from "./teamcards";
import PurpleDown from "../../../components/Spacers/purple-spacer-down";

export default function TeamSection() {

  const team = [
    {Name: 'Kemi Onadipe',
      Role: 'Founer / CEO',
      Image: '/img/kemiOnadipe.jpg',
      Linkedin: '',
      Facebook: '',
      Description: '  a very cool pers a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool personn a very cool person v',
    },
    {Name: 'Ruth Badmus',
      Role: 'Project Manager',
      Image: '/img/ruthBadmus.jpg',
      Linkedin: '',
      Facebook: '',
      Description: '  a very cool pers a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool personn a very cool person v',
    },
    {Name: 'Yemi Olayemi',
      Role: 'Charity Manager',
      Image: '/img/yemiOlayemi.jpg',
      Linkedin: '',
      Facebook: '',
      Description: '  a very cool pers a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool personn a very cool person v',
    },
    {Name: 'Bankole Dada',
      Role: 'Tech Lead',
      Image: '/img/bankoleDada.jpg',
      Linkedin: '',
      Facebook: '',
      Description: '  a very cool pers a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool personn a very cool person v',
    },
    {Name: 'Pamela Davies',
      Role: 'Event Co-ordinator',
      Image: '/img/pamelaDavies.jpg',
      Linkedin: '',
      Facebook: '',
      Description: '  a very cool pers a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool personn a very cool person v',
    },
    {Name: 'Wilson Odunze',
      Role: 'Legal Advisor',
      Image: '/img/defaultavatar.jpg',
      Linkedin: '{ Icon Image}',
      LinkedinLink: '',
      Description: '  a very cool pers a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool person a very cool personn a very cool person v',
    }
  ];

  const teamArray = [];
   for (let ii = 0; ii < team.length; ii++) {
      teamArray.push(<TeamCards image={team[ii].Image} name={team[ii].Name} roles={team[ii].Role}  />);
    }

  return(
    <div className='w-full flex flex-col'>
      <div className='max-w-[1500px] px-5 py-11 '>
        <h1 className='text-white text-4xl md:text-6xl text-center py-10 font-bold team '> Our Team</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 xs2:gap-10 lg:gap-16 '>
          {teamArray}
          <a href=""></a>
        </div>
      </div>
    </div>
    
  );
}