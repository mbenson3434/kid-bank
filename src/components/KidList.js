import Kid from './Kid';

// Display a list of current kids

const KidList = ({ kidList }) => {

    return (
        <div>
            {
                kidList.map((kid, index) =>{
                    return <Kid key={index} kid={kid}/>
                })
            }

            <h2>{kidList.name}</h2>
        </div>
    )
}

export default KidList;