
import { useState } from 'react';
import HomeProjectsStyle from './HomeProjectsStyle.module.scss';
import NadaverseImg from '../../../../assets/images/nadaverse.png';
import OMWImg from '../../../../assets/images/onemoneyway.png';
export default function HomeProjects() {
  

  const projects = [
    {id: 0, pos: 0, image: NadaverseImg, link: 'https://www.nadaverse.com/'},
    {id: 1, pos: 1, image: OMWImg, link: 'https://onemoneyway.com/'},
    { id: 2, pos: 2, image: NadaverseImg, link: 'https://www.nadaverse.com/' },
    { id: 3, pos: 3, image: OMWImg, link: 'https://onemoneyway.com/' },
    { id: 4, pos: 4, image: NadaverseImg, link: 'https://www.nadaverse.com/' },
  ]



    const [items, setItems] = useState(
      projects.map((project, i) => ({...project, pos: i }))
    );

    const centerPos = Math.floor(items.length / 2);

    const shuffle = (clickedId) => {
      setItems((prev) => {
        const newItems = prev.map((it) => ({...it}));
        const heroIdx = newItems.findIndex((it) => it.pos === centerPos);
        const targetIdx = newItems.findIndex((it) => it.id === clickedId);

        [newItems[heroIdx].pos, newItems[targetIdx].pos] = [newItems[targetIdx].pos, newItems[heroIdx].pos];
        return newItems;
      })
    }


    return(
      <section className={HomeProjectsStyle['projects-wrapper']}> 
          <h2 className={HomeProjectsStyle['projects-title']}>Last Projects</h2>
          <ul className={HomeProjectsStyle.gallery}>
            {items.map((item) => (
              <li
                key={item.id}
                className={HomeProjectsStyle['project-item']}
                data-pos={item.pos}
                onClick={() => {
                  if(item.pos === centerPos) {
                    window.open(item.link, '_blank');
                  } else {
                    shuffle(item.id)
                  }
                }}
              >
                <img className={HomeProjectsStyle['gallery-img']} src={item.image} alt={`Project ${item.id + 1}`}/>
              </li>
            ))}
          </ul>
      </section>
    )
}
