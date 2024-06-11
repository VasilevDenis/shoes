import { useState } from "react";
import IconSwitch from "../iconSwitch/IconSwitch";
import ListView from "../listView/ListView";
import CardsView from "../cardsView/CardsView";
import products from "../../products";
import './Store.css';


function Store() {
    const [isToggled, setToggled] = useState(false);

    const onSwitch = () => {
        setToggled(!isToggled);
    }

    return (
        <div className="store">
            <IconSwitch icon={isToggled ? "view_list" : "view_module"} onSwitch={onSwitch} />
            { !isToggled ? <ListView products={products} /> : <CardsView products={products} /> }
        </div>
    )
}

export default Store