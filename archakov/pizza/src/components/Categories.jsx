import React, { useState } from "react"

 

function Categories () {

  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    'Все','Мясные', "Вегетарианская", "Гриль", "Острые", "Закрытые"
  ]

  const onClickCategory = (i) => {
    setActiveCategory(i)
  }
  

    return (
      <div className="categories">
      <ul>

        {
          categories.map((item,index) => (

            <li key={index} onClick={() => onClickCategory(index)} className={activeCategory === index ? "active" : ""}>{item}</li>
          ))
        }
        
      </ul>
    </div>
    )
   }


   export default Categories