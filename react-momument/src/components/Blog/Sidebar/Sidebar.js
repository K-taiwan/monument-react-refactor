import React from 'react';
import GT1 from './GT_1.jpg';

const Sidebar = () => {
    return(
        <aside>
			<h3>About Us</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.</p>
			<p>Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.</p>
			<img src={GT1} alt=""/>
			<h3>Recent Issues</h3>
			<ul>
				<li><a href="">Issue Nineteen &mdash; AMG</a></li>
				<li><a href="">Issue Eighteen &mdash; M series</a></li>
				<li><a href="">Issue Seventeen &mdash; 911</a></li>
				<li><a href="">Issue Sixteen &mdash; GTR</a></li>
				<li><a href="">Issue Fifteen &mdash; R8</a></li>
				<li><a href="">Issue Fourteen &mdash; LFA</a></li>
			</ul>
		</aside>
    );
};

export default Sidebar;