function(l, k)             //level object, keyCode
{
  l[l.x] = ' ';            //remove player from level
  l.d = k - 37 >> 2 ||     //if no cursor key was pressed or
    l[l.x + (              //check new position
      k = k % 2            //calculate new walking direction
        ? k - 38           //-1 is left, +1 is right
        : (k - 39) * l.w   //-width is up, +width is down
    )] == '#'              //if it's not possible to use new direction
      ? l[l.x + l.d        //then check old direction
        ] == '#'           //if it's a wall
          ? 0              //stop
          : l.d            //else use old direction
      : k;                 //else use new direction
  l.p += l[l.x += l.d      //walk
    ] == '.';              //and increase points
  l[l.x] = 'P'             //place player in level
}