import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Segment,Grid,Header,Icon,Search,Divider,Button,Placeholder,Dimmer,Loader,List} from 'semantic-ui-react';

function App() {
  return (
    <div>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
          <Grid.Row>
            <Grid.Column>
              <Header icon>
                <Icon name='search'/>
                Cari Dokumen
              </Header>
              <Search placeholder='Search Document' />
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name='pdf file outline'/>
                Tambah Dokumen Baru
              </Header>
              <Button primary>
                Create Document
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Placeholder>
          <Placeholder.Paragraph>
            <Placeholder.Line/>
            <Placeholder.Line/>
            <Placeholder.Line/>
          </Placeholder.Paragraph>
        </Placeholder>
        <Dimmer active>
          <Loader content='loading'/>
        </Dimmer>
      </Segment>

      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={5}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2' content='Website Terkait'/>
            <List>
              <List.Item icon='linkify' content={<a href='google.com'>Google</a>}/>
              <List.Item icon='linkify' content={<a href='facebook.com'>Facebook</a>}/>
              <List.Item icon='linkify' content={<a href='https://react.semantic-ui.com/'>Semantic-UI</a>}/>
              <List.Item icon='linkify' content={<a href='niomic.com'>Niomic</a>}/>
              <List.Item icon='linkify' content={<a href='https://reactjs.org/'>React</a>}/>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  );
}

export default App;
