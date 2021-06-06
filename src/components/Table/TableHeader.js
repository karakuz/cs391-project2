import React from 'react';

class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Released</th>
                    <th>Runtime</th>
                    <th>Genre</th>
                    <th>Director</th>
                    <th>Plot</th>
                    <th>Language</th>
                    <th>Metascore</th>
                    <th>imdbRating</th>
                    <th>totalSeasons</th>
                </tr>
            </thead>);
    }
}

export default TableHeader;