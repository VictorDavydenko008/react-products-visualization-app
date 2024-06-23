import React from 'react';
import Item from './item';

function Items({ items, page }) {
    const offset = page.limit * (page.current - 1);
    const currentItems = items.slice(offset, offset + page.limit);
    
    return (
        <div className="items-container">
            {currentItems &&
                currentItems.map((item) => 
                    <Item 
                        key={item.id}
                        title = {item.title}
                        subtitle = {item.subtitle}
                        description = {item.description}
                        price = {item.price}
                        specifications = {item.specifications}
                        type = {item.type}
                        profile_image = {item.profile_image}
                        source = {item.source}
                        url = {item.url}
                    />
                )
            }
        </div>
    );
}

export default Items;