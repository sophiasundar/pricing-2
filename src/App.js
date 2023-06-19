import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Components/Cards';



function App() {

  var cardDetails=[
    {
      planName:"FREE",
      price: 0,
      features :[
        {
          name: "Single User",isEnabled:true
        },
        {
          name: "5GB Storage",isEnabled:true
        },
        {
          name: "Unlimited Public Projects",isEnabled:true
        },
        {
          name: "Community Access",isEnabled:true
        },
        {
          name: "Unlimited Private Projects",isEnabled:false
        },
        {
          name: "Dedicated Phone Support",isEnabled:false
        },
        {
          name: "Free Subdomain",isEnabled:false
        },
        {
          name: "Monthly Status Reports",isEnabled:false
        },

      ],
    },
    {
      planName:"PLUS",
      price: 9,
      features :[
        {
          name: "5 User",isEnabled:true,isBold: true
        },
        {
          name: "50GB Storage",isEnabled:true
        },
        {
          name: "Unlimited Public Projects",isEnabled:true
        },
        {
          name: "Community Access",isEnabled:true
        },
        {
          name: "Unlimited Private Projects",isEnabled:true
        },
        {
          name: "Dedicated Phone Support",isEnabled:true
        },
        {
          name: "Free Subdomain",isEnabled:true
        },
        {
          name: "Monthly Status Reports",isEnabled:false
        },

      ],
    },
    {
      planName:"PRO",
      price: 49,
      features :[
        {
          name: "Unlimited User",isEnabled:true,isBold: true
        },
        {
          name: "150GB Storage",isEnabled:true
        },
        {
          name: "Unlimited Public Projects",isEnabled:true
        },
        {
          name: "Community Access",isEnabled:true
        },
        {
          name: "Unlimited Private Projects",isEnabled:true
        },
        {
          name: "Dedicated Phone Support",isEnabled:true
        },
        {
          name: "Unlimited Free Subdomain",isEnabled:true,isunlimited: true
        },
        {
          name: "Monthly Status Reports",isEnabled:true
        },

      ],
    },
  ];

  return (
    <div className="App">
     <section className="pricing py-5">
       <div className="container">
        <div className="row">
            {
              cardDetails.map((data,index)=>{
                <Card></Card>
          return <Card key={`C${index}`} data={data}></Card>
        })
            }
        </div>
        </div>
        </section>
    </div>
  );
}

export default App;
