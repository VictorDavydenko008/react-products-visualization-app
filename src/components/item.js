export default function Item(data) {
    const handleClick = () => {
        window.open(data.url, '_blank', 'noopener,noreferrer')
    };

    // create specifications table from JSON
    const specificationsTable = Object.entries(data.specifications).map(([key, value]) => (
        <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
        </tr>
    ));
    
    let description = (data.description) ? data.description : "None";

    const price = data.price['$numberDecimal'];

    return (
        <div className="item" onClick={handleClick}>
            <img src={data.profile_image} alt="item-img"></img>
            <h2 className="item-title">{data.title}</h2>
            <p className="item-subtitle"><strong>Item code:</strong> {data.subtitle}</p>
            <p className="item-description"><strong>Description:</strong> {description}</p>
            <p className="item-price"><strong>Price:</strong> {price} ₴</p>
            <h3>Specifications</h3>
            <div className="item-specifications">
                <table>
                    <tbody>
                        {specificationsTable}
                    </tbody>
                </table>
            </div>
            <p className="item-type"><strong>Type:</strong> {data.type}</p>
            <p className="item-source"><strong>Source:</strong> {data.source}</p>
        </div>
    );
}
