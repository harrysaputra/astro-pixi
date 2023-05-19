import { BlurFilter } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

export const HelloWorld = () => {
  const blurFilter = useMemo(() => new BlurFilter(1), []);

  return (
    <Stage options={{ backgroundAlpha: 0 }}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y: 0.5 }}
        rotation={0.5}
      />

      <Container x={400} y={330}>
        <Text
          text="Hello Blurry World"
          anchor={{ x: 0.5, y: 0.5 }}
          style={{ fill: 0xffffff, fontSize: 24 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  );
};
