import {useUser} from "../../Context/UserContext";


export default function Orders() {
  
  const {user} = useUser();
  return (
    <div >
      <h2 className="text-xl font-semibold mb-6">My Orders</h2>

      {user?.orders?.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        user.orders.map((order, index) => (
          <>
          <div key={index} className="mb-4 border p-4 rounded">
            <p className="font-semibold mb-2">Order #{index + 1}</p>

            {order.map((item) => (
              <div key={item.id} className="flex justify-between">
                <p>{item.name}</p>
                <p>{item.price} EGP</p>
              </div>
            ))}
          </div>
             <p className="text-right font-bold mt-2">
              Total: {order.reduce((sum, item) => sum + item.price, 0)} EGP
            </p>
            </>
        ))
      )}
    </div>
  );
}
