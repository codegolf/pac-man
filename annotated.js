function(l, k)               //level object, keyCode
{
  l[l.x] = 0;                //remove player from level
  l.p += l[                  //increase points
    l.x +=                   //walk
      l.d =                  //calculate walking direction
        k - 37 >> 2 ||       //if no cursor key was pressed or
        l[l.x + (            //check new position
          k = k % 2          //calculate new walking direction
            ? k - 38         //-1 is left, +1 is right
            : (k - 39) * l.w //-width is up, +width is down
        )] & 4               //if it's not possible to use new direction
          ? l[l.x + l.d      //then check old direction
            ] & 4            //if it's a wall
              ? 0            //stop
              : l.d          //else use old direction
          : k                //else use new direction
  ] == 2;                    //if walking into some gold
  l.e |= l[l.x] & 8;
  l[l.x] = 1                 //place player in level
}