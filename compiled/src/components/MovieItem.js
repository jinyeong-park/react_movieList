// functional stateless component

var MovieItem = ({ movie }) => React.createElement(
  'div',
  null,
  React.createElement(
    'li',
    null,
    movie.title
  ),
  console.log('movie props', movie)
);

export default MovieItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllSXRlbS5qc3giXSwibmFtZXMiOlsiTW92aWVJdGVtIiwibW92aWUiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQUlBLFlBQVksQ0FBQyxFQUFDQyxLQUFELEVBQUQsS0FFZDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0EsVUFBTUM7QUFBWCxHQURGO0FBRUdDLFVBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSCxLQUEzQjtBQUZILENBRkY7O0FBUUEsZUFBZUQsU0FBZiIsImZpbGUiOiJNb3ZpZUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbmFsIHN0YXRlbGVzcyBjb21wb25lbnRcblxudmFyIE1vdmllSXRlbSA9ICh7bW92aWV9KSA9PiAoXG5cbiAgPGRpdj5cbiAgICA8bGk+e21vdmllLnRpdGxlfTwvbGk+XG4gICAge2NvbnNvbGUubG9nKCdtb3ZpZSBwcm9wcycsIG1vdmllKX1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllSXRlbTsiXX0=