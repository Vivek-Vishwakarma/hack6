import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Box } from "@mui/system";
import "../App.css";
export default function Blog() {
  return (
    <>
      <Typography id="blog" className="heading" variant="h4">
        Blogs
      </Typography>
      <Box className="reviews" sx={{flexWrap : "wrap"}}>
        <Card className="carddiv" sx={{ maxWidth: 300}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/random/1600x900/?nurse,health,fitness"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              How to Create a Workout Plan That Works for You
              </Typography>
              <Typography variant="body2" color="text.secondary">
              There are countless forms of exercise, from walking at a steady pace to high-intensity interval training for cardiorespiratory fitness, and from ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href="https://health.usnews.com/health-news/blogs/eat-run/articles/how-to-create-a-custom-workout-plan" size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className="carddiv" sx={{ maxWidth: 300}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/random/1600x900/?doctors,fitness"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              ProfNet Expert Alerts for April
              </Typography>
              <Typography variant="body2" color="text.secondary">
              NEW YORK, April 8, 2022 /PRNewswire/ -- Below are experts from the ProfNet network who are available to discuss timely issues in your coverage area ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href="https://www.prnewswire.com/news-releases/profnet-expert-alerts-for-april-08-2022-301521128.html" size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className="carddiv" sx={{ maxWidth: 300}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/random/1600x900/?fitness"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              How online fitness apps will influence the fitness industry in the future
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Despite the disruption caused by the pandemic, the industry has seen a rapid increase in the number of fitness enthusiasts over the last two years. The industry’s resilience and adaptability ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href="https://timesofindia.indiatimes.com/blogs/voices/how-online-fitness-apps-will-influence-the-fitness-industry-in-the-future/" size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className="carddiv" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/random/1600x900/?health"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              The Nutrition Source
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The dietary supplement industry was valued at $122 billion in 2016, and it continues to grow. [1] One category of dietary supplements are workout supplements, which are typically taken before (‘pre-workout’) or after exercising (post-workout) ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href="https://www.hsph.harvard.edu/nutritionsource/workout-supplements/" size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className="carddiv" sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/random/1600x900/?nurse"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Why physical activity so important to all of us
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Dr Butler said this in 1978 when he was the director of the National Institute of Aging. The data accumulated since then has proven him right over and over again. Based on the same evidence and data, I would now adapt ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target="_blank" href="https://timesofindia.indiatimes.com/blogs/voices/atmasvasth-physical-activity-its-more-than-just-ripped-bodies-weight-loss/" size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>

        <Card className="carddiv" sx={{ maxWidth: 300}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image="https://source.unsplash.com/random/1600x900/?medical"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              The Best Men’s Health Blogs of 2020
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Knowing exactly what you should — and shouldn’t — be doing for your own health isn’t always easy. There’s too much information, not enough time in the day, and a lot of advice that may not suit your lifestyle. ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href="https://www.healthline.com/health/mens-health/best-mens-health-blogs#1" target="_blank" size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
