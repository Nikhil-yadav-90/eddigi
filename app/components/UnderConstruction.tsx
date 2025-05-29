import { Image, Text, Title } from '@mantine/core';
import image from './image.svg';
import classes from './EmailBanner.module.css';

export default function UnderConstruction() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Wait a minute...</Title>
                {/* <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text> */}
                <Text fz="sm" c="dimmed">
                    We&aposre working hard to bring you an improved experience.
                    Please check back soon — exciting things are on the way!
                </Text>
                <Text fw={500} fz="lg" mb={5}>
                    Thank you for your patience and support.
                </Text>

                {/* <div className={classes.controls}>
          <TextInput
            placeholder="Your email"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
            radius="md"
            size="md"
          />
          <Button className={classes.control} radius="md" size="md">
            Subscribe
          </Button>
        </div> */}
            </div>
            <Image src={image.src} className={classes.image} />
        </div>
    );
}