import * as React from "react";

import {DndProvider, useDrag, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useState} from "react";
export function Kanban() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div>
				<Txt id={1} context={"test"}/>
				<Txt id={2} context={"15151"}/>
				<Txt id={3} context={"aabaw"}/>
			</div>
			<hr/>
			<Board/>
		</DndProvider>
	)
}
function Board() {
	//todo grammer: ()=>()
	const [{isOver},drop]=useDrop(()=>({
		accept:"type_name",
		drop:(item:any)=>addItem(item.id),
		collect:(monitor)=>({
			isOver: monitor.isOver()
		})
	}))
	const addItem=(id)=>{
		setBoard((board)=>[...board,
			{
				id:0,
				context:id
			}
		])
	}
	const [board,setBoard]=useState([
		{
			id:1,
			context:"test"
		}
	])
	return(
		<div ref={drop}>
			{
				board.map((txt) => {
					return(<Txt {...txt}></Txt>)
				})
			}
		</div>

	)
}
function Txt({id,context}) {
	const [{isDragging},drag]=useDrag(()=>({
		type:"type_name",
		item:{id:id},
		collect:(monitor)=>({
			isDragging: monitor.isDragging()
		})
	}))
	return(
		<div ref={drag}>
			<p style={{width:"100px",backgroundColor:"yellow"}}>{context}</p>
		</div>
	)
}
