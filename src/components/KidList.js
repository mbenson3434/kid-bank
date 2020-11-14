import Kid from './Kid';

// Display a list of current kids

const KidList = ({ kidList, setKidList }) => {

    return (
        <div>
            {
                kidList.map((kid, index) =>{
                    return <Kid key={index} kid={kid} kidList={kidList} setKidList={setKidList}/>
                })
            }

            <h2>{kidList.name}</h2>
        </div>
    )
}

export default KidList;