import React from 'react'
import { useGetTodosQuery } from './store/apis/getPleaceholder'

export const TodoApp = () => {

  const { data: todo = [] } = useGetTodosQuery();
  console.log(todo)

  return (
    <>
        <h1>Pleaceholder</h1>
        <hr />
        <div className="container text-center p-10 ">
            <div className="row align-items-start" >
              {
                todo.map( todos => (
                      <div className="col p-2" key={ todos.id }>
                        <div className="card" style={{ width: "18rem" }}>
                          <img src={ todos.url } className="card-img-top" alt="..." />
                          <div className="card-body">
                            <blockquote className="blockquote">
                              <p>{ todos.title }</p>
                            </blockquote>
                          </div>
                        </div>  
                      </div>  
                ))
              }
          </div>
         </div>
         
         
        
        
    </>
  )
}
