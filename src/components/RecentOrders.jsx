import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';

const orders = [
  {
    id: 1,
    orderId: "#ORD-2024-001",
    customer: "Rajesh Kumar",
    status: "New",
    items: [
      { name: "Organic Fertilizer 5kg", quantity: 2 },
      { name: "Hybrid Wheat Seeds", quantity: 1 }
    ],
    totalAmount: 2497,
    timeLeft: 1800 // 30 minutes in seconds
  },
  {
    id: 2,
    orderId: "#ORD-2024-002",
    customer: "Priya Sharma",
    status: "Pending",
    items: [
      { name: "Pesticide Sprayer", quantity: 1 },
      { name: "Soil Testing Kit", quantity: 1 }
    ],
    totalAmount: 2398,
    timeLeft: 900 // 15 minutes
  },
  {
    id: 3,
    orderId: "#ORD-2024-003",
    customer: "Amit Patel",
    status: "Shipped",
    items: [
      { name: "Gardening Gloves", quantity: 3 },
      { name: "Water Sprinkler", quantity: 2 }
    ],
    totalAmount: 2595,
    timeLeft: 0 // No timer
  },
  {
    id: 4,
    orderId: "#ORD-2024-004",
    customer: "Sneha Reddy",
    status: "Delivered",
    items: [
      { name: "Organic Fertilizer 5kg", quantity: 1 },
      { name: "Hybrid Wheat Seeds", quantity: 2 }
    ],
    totalAmount: 3197,
    timeLeft: 0 // No timer
  },
];

const Timer = ({ seconds }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // Exit early when we reach 0
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, [timeLeft]); // Only re-run the effect if timeLeft changes

    if (timeLeft <= 0) {
        return <span>Time's up!</span>;
    }

    const minutes = Math.floor(timeLeft / 60);
    const remainingSeconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

    return (
        <span className="text-white font-bold">{formattedTime}</span>
    );
};

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <h2 className="font-bold text-lg p-3 border-b border-gray-100">Recent Orders</h2>
      <div className="flex overflow-x-auto p-3 space-x-3">
        {orders.map(order => (
          <div key={order.id} className="min-w-[280px] bg-agri-gray rounded-lg relative">

            {(order.status === "New" || order.status === "Pending") && (
              <div className="absolute top-0 left-0 w-full h-8 bg-red-600 flex items-center justify-between px-3 rounded-t-lg">
                <span className="text-white text-sm">Time Left to Pack Order:</span>
                <div className='flex items-center gap-2'>
                    <Timer seconds={order.timeLeft} />
                    <FaRegClock className='text-white'/>
                </div>

              </div>
            )}

            <div className="p-3" style={{ paddingTop: (order.status === "New" || order.status === "Pending") ? '32px' : '16px' }}>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-sm">{order.orderId}</div>
                    <div className="text-xs text-gray-500">{order.customer}</div>
                  </div>
                  <span className={`inline-block ${getStatusBgColor(order.status)} text-white text-xs px-2 py-0.5 rounded-full font-semibold`}>
                    {order.status}
                  </span>
                </div>

                <div className="space-y-1">
                  {order.items.map((item, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500 ml-2">x {item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Total:</span>
                    <span className="text-sm font-semibold">₹{order.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const getStatusBgColor = (status) => {
  switch (status) {
    case "New":
      return "bg-green-500";
    case "Pending":
      return "bg-yellow-500";
    case "Shipped":
      return "bg-blue-500";
    case "Delivered":
      return "bg-gray-500";
    default:
      return "bg-gray-400";
  }
};
