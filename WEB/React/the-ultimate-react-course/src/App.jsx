// // import TextExpander from "./assets/components/TextExpander/TextExpander";
// // import ShowData from "./assets/components/ShowData";
// // import { useState } from "react";
// import Test from "./assets/components/Test";
// // import Location from "./assets/components/Location";
// // let users=[
// //   {id:1, firstName:'kaywan'},
// //   {id:2, firstName:'ali'},

import LearnAxios from "./components/LearnAxios"




// import { useCallback, useMemo, useState } from "react";
// import Counter from "./assets/components/Counter";
// import Button from "./assets/components/Button";

// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import RouterUser from "./pages/routerUser";
// // import Users from "./pages/Users";

// // ]
// function App() {
//   console.log('app...........');
//   const [count, setCount] =useState(0)
//   const [t, setT] =useState(0)

// const get = useCallback(()=>{

//     console.log('get');

// },[])

// const increment = useCallback(()=>{
//   setCount(count+1)
// },[count])

// const result =useMemo(()=>{

// })
// console.log('result : ',result);
//   return (
//     <>
//     <Counter count ={count}/>
//     <Button increment = {increment}/>
//     {/* <Test  get={get} /> */}
//     <Test  get={get} key={1}/>
//     <button onClick={()=>setT(t=>t+1)}>update</button>

//       {/* <BrowserRouter>
//         <Routes>

//             <Route path="users/*" element={<RouterUser/>} />

//         </Routes>
//       </BrowserRouter> */}

//       {/* <BrowserRouter>
//    <Routes>

//    <Route path='users' element={<Users/> }>
//       <Route path='login' element={<p>login</p> }/>
//       <Route path='logout' element={<p>log out</p> }/>

//    </Route>
//    </Routes>
//   </BrowserRouter>  */}

//       {/* <Location/> */}
//       {/* <Test key={Math.random()}/> */}

//       {/* {data.map(user=>(
//       <div key={user.id} className="">{user.firstName}</div>
//       ))}
//       <Test {...{setCount:setCount, users:users}}/>
//  */}

//       {/* <ShowData
//         {...{
//           url: "https://jsonplaceholder.typicode.com/users/1/posts",
//           countShowData: 5,
//         }}
//         /> */}

//       {/* <TextExpander></TextExpander> */}

//       {/* <TextExpander
//         {...{
//           collapsedNumWords: 6,
//           expandButtonText: "show more",
//           collapseButtonText: "collapse text",
//           buttonColor: "red",
//           className:'box',
//           expended:true
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ad
//         aliquid optio! Voluptatum neque maxime natus? Quas obcaecati mollitia
//         ratione.
//       </TextExpander>

//       <TextExpander
//         {...{
//           collapsedNumWords: 15,
//           expandButtonText: "show more",
//           collapseButtonText: "collapse text",
//           buttonColor: "blue",
//           className:'box'
//         }}
//       >
//         non fugiat quae? Delectus cupiditate dicta ab impedit, nesciunt
//         assumenda et facere quibusdam sint. Optio similique aut id, recusandae
//         atque fugit, maiores autem repellendus nihil dignissimos quo impedit
//         voluptatum consequuntur assumenda numquam praesentium nesciunt fugiat
//         earum reprehenderit itaque. Atque voluptates similique rerum delectus
//         fugiat aliquid nihil nisi ipsa exercitationem. Nesciunt, nam cupiditate
//         corporis minima, alias hic adipisci perspiciatis eos beatae quasi,
//         placeat mollitia ipsum in a sed porro. Eaque, dolor. Repellat!
//       </TextExpander>  */}
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import { faker } from "@faker-js/faker";
// import { useMyHook } from "./hooks/myHook";

// const products = Array.from({ length: 20 }, () => {
//   return {
//     productName: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: faker.commerce.price(),
//   };
// });

// function ProductItem(prop) {
//   const { product } = prop;
//   return (
//     <li className="product">
//       <p className="product-name">{product?.productName}</p>
//       <p className="product-price">${product?.price}</p>
//       <p className="product-description">{product?.description}</p>
//     </li>
//   );
// }

// const companies = Array.from({ length: 15 }, () => {
//   return {
//     companyName: faker.company.name(),
//     phrase: faker.company.catchPhrase()
//   };
// });

// function CompanyItem(prop) {
//   const { company, defaultVisibility }=prop
//   const [isVisible, setIsVisisble] = useState(defaultVisibility);

//   return (
//     <li
//       className="company"
//       onMouseEnter={() => setIsVisisble(true)}
//       onMouseLeave={() => setIsVisisble(false)}
//     >
//       <p className="company-name">{company.companyName}</p>
//       {isVisible && (
//         <p className="company-phrase">
//           <strong>About:</strong> {company.phrase}
//         </p>
//       )}
//     </li>
//   );
// }

// function List(prop) {
//   const { title, items, render } = prop;
//   const {
//     isOpen,
//     setIsOpen,
//     isCollapsed,
//     setIsCollapsed,
//     displayItems,
//     toggleOpen,
//   } = useMyHook(items);
//   return (
//     <div className="list-container">
//       <div className="heading">
//         <h2>{title}</h2>
//         <button onClick={toggleOpen}>
//           {isOpen ? <span>&or;</span> : <span>&and;</span>}
//         </button>
//       </div>
//       {isOpen && <ul className="list">{displayItems.map(render)}</ul>}
//       <button
//         className="btn"
//         onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
//       >
//         {isCollapsed ? `Show all ${items.length}` : "Show less"}
//       </button>
//     </div>
//   );
// }
// import withToggles from "./assets/components/HOC";

// function ProductList(prop) {
//   const { title, items } = prop;
//   return (
//     <ul className="list">
//       {items.map((product) => (
//         <ProductItem key={product?.productName} product={product} />
//       ))}
//     </ul>
//   );
// }

// export default function App() {
//   const ProductListWithToggle=withToggles(ProductList)
//   return (
//     <div>
//       <h1>Render Props Demo</h1>

//       <div className="col-2">

//        <ProductListWithToggle title='products HOC' items={products}/>


//         {/* <List
//           title="companies"
//           items={companies}
//           render={(company) => (
//             <CompanyItem key={company?.companyName} company={company} />
//           )}
//         />

//         <List
//           title="Products"
//           items={products}
//           render={(product) => (
//             <ProductItem key={product?.productName} product={product} />
//           )}
//         /> */}
//       </div>
//     </div>
//   );
// }

// // LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
























// import Counter from "./assets/components/Counter";


// export default function App() {
//   return (
//     <div>
//       <h1>Compound Component Pattern</h1>
//       {/* <Counter
//         iconIncrease="+"
//         iconDecrease="-"
//         label="My NOT so flexible counter"
//         hideLabel={false}
//         hideIncrease={false}
//         hideDecrease={false}
//         positionCount="top"
//       /> */}

//       <Counter >
//         <div className="counterOne">
//         <Counter.Label>My super flexible counter : </Counter.Label>
//         <Counter.Decrease icon="-" />
//         <Counter.Count />
//         <Counter.Increase icon="+" />
//         </div>
//       </Counter>

//       <div>
//         <Counter>
//         <div className="counterTwo">
//           <Counter.Decrease icon="◀️" />
//           <div>
//             <Counter.Count />
//           </div>
//           <Counter.Increase icon="▶️" />
//           </div>       
//         </Counter>
//       </div>
//     </div>
//   );
// }



// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import  Project from './assets/components/Project'
// const queryClient = new QueryClient()
// function App() {
//    return(

//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools/>
//       <p>react query scroll</p>
//       <Project/>
//   </QueryClientProvider>
 
//    )
// }

// export default App




// import Conversation from './assets/components/Conversation'
// import Modal from './assets/components/Modal'

// const messages=[
//    {id:1, fullName:'', title:'سلام علی برنامه رو نوشتی؟', isSender:true,create_at:'2023/04/6'},
//    {id:2, fullName:'علی رضا ساعدی',title:'سلام تو خوبی ؟ تا یک هفته دیگه تموم میشه', isSender:false,create_at:'2023/04/9'},
//    {id:3, fullName:'کیوان محب جلالی',title:'خوبه پس تموم شد بهم اطلاع بده ممنون', isSender:true,create_at:'2023/05/5'},
//    {id:4, fullName:'علی رضا ساعدی',title:'خیالت راحت.', isSender:false,create_at:'2023/05/6'},
// ]

// const m = [
//    {id:5, fullName:'', title:'سلام علی برنامه رو نوشتی؟', isSender:true,create_at:'2023/04/6'},
//    {id:6, fullName:'علی رضا ساعدی',title:'خیالت راحت.', isSender:false,create_at:'2023/05/6'},
//    {id:7, fullName:'', title:'سلام علی برنامه رو نوشتی؟', isSender:true,create_at:'2023/04/6'},
//    {id:8, fullName:'علی رضا ساعدی',title:'خیالت راحت.', isSender:false,create_at:'2023/05/6'},
// ]

// function App() {
//    return(<>
      
//     <Modal>
//       <Modal.Open nameModal='message'>
//          <button>open Modal 1</button>
//       </Modal.Open>

//       <Modal.Window nameModal='message'>
//          <Conversation messages={messages}/>
//       </Modal.Window>
//     </Modal>

//     <Modal>
//       <Modal.Open nameModal='m'>
//          <button>open Modal 2</button>
//       </Modal.Open>

//       <Modal.Window nameModal='m'>
//          <Conversation messages={m}/>
//       </Modal.Window>
//     </Modal>
//    </>
 
//    )
// }

// export default App























const App = () => {
  return (
   <>
    <div className="bg-red-600">App</div>
    <LearnAxios/>
   </>
  )
}

export default App








