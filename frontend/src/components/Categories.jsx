
import { useState } from "react";
import {
  Waves,
  Mountain,
  Trees,
  Castle,
  House,
  Tent,
} from "lucide-react";

const categories = [
  { name: "Amazing views", icon: Mountain },
  { name: "Beachfront", icon: Waves },
  { name: "Cabins", icon: Trees },
  { name: "Countryside", icon: House },
  { name: "Castles", icon: Castle },
  { name: "Camping", icon: Tent },
];

function Categories() {
  const [selected, setSelected] = useState("Amazing views");

  return (
    <section className="categories-section">
      <div className="categories-list">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className={
                selected === category.name
                  ? "category active-category"
                  : "category"
              }
              onClick={() => setSelected(category.name)}
            >
              <Icon size={24} />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
