import { useState } from "react";
import { Box, Container, Grid, Card, CardMedia, Typography, Button, ButtonGroup } from "@mui/material";

const galleryImages = [
  { title: "Science Fair", image: "/images/tour1.jpg", category: "Contest" },
  { title: "Drama Festival", image: "/images/drama.jpg", category: "Drama" },
  { title: "Music Festival", image: "/images/music.jpg", category: "Music" },
  { title: "Educational Tour", image: "/images/tour2.jpg", category: "Tour" },
  { title: "Debate Competition", image: "/images/tour3.jpg", category: "Contest" },
  { title: "Art Exhibition", image: "/images/tour4.jpg", category: "Drama" },
];

export default function FilteredActivitiesGallery() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Music", "Drama", "Tour", "Contest"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === filter);

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Student Activities
        </Typography>

        {/* Filter Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 5, flexWrap: "wrap" }}>
          <ButtonGroup variant="outlined" color="primary">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "contained" : "outlined"}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={4}>
          {filteredImages.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
              </Card>
              <Typography variant="subtitle1" textAlign="center" sx={{ mt: 1 }}>
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
