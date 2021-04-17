//  import PropTypes from 'prop-types';
import { useState } from 'react'

function AddTask({ onAdd }) {

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert('Please Task Details carefully')
      return
    }
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

    return(
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input type='text' placeholder='Enter task name' value={text} 
          onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Day & Time</label>
          <input type='text' placeholder='Enter Day & Time' value={day} 
          onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
          <label>Reminder</label>
          <input type='checkbox' 
          checked={reminder} value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' onClick={onSubmit}/>
      </form>
    );
}


export default AddTask;
