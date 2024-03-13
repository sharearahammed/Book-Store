

const Chart = ({cart}) => {
    const {name,discountPrice} = cart;
    return (
        
              <tbody>
                    <tr>
                      <td>{name}</td>
                      <td>{discountPrice}</td>
                    </tr>
              </tbody>
           
    );
};

export default Chart;