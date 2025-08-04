
import { useState } from 'react';
import HomeProjectsStyle from './HomeProjectsStyle.module.scss';


export default function HomeProjects() {
    const initial = [...Array(5)].map((_, i) => ({ id: i, pos: i }));
    const [items, setItems] = useState(initial);

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
      <div className={HomeProjectsStyle['projects-wrapper']}> 
          <ul className={HomeProjectsStyle.gallery}>
            {items.map((item) => (
              <li
                key={item.id}
                className={HomeProjectsStyle['project-item']}
                data-pos={item.pos}
                onClick={() => shuffle(item.id)}
              >
                Project {item.id + 1}
              </li>
            ))}
          </ul>
      </div>
    )
}
