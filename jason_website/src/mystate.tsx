import { useState } from "react"

export default function OpenApp(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        { isOpen ? (<button className="btn btn-success" onClick={() => {setIsOpen(false)}}>Open</button>)
        :  (<button className="btn btn-success" onClick={() => {setIsOpen(true)}}>Closed</button>)
    }

        {isOpen ? (
            <p>Phone is closed</p>
        ) : (
            <div className="mockup-phone">
  <div className="mockup-phone-camera"></div>
  <div className="mockup-phone-display text-white grid place-content-center bg-neutral-900">
    It's Glowtime.
  </div>
</div>
        )
    }
        
        </>
    )
}

